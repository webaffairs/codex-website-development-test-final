"""Serve the studio site and collect project briefs in private SQLite storage."""
import argparse
from datetime import datetime, timezone
from functools import partial
from http import HTTPStatus
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
import json
import mimetypes
from pathlib import Path
import re
import sqlite3
from threading import Lock
from time import monotonic
from urllib.parse import parse_qs, unquote, urlsplit

ROOT = Path(__file__).resolve().parent
PAGES = {"index.html", "about.html", "services.html", "contact.html"}
LIMITS = {"name": 100, "email": 254, "business": 140, "message": 4000}


class StudioHandler(BaseHTTPRequestHandler):
    def __init__(self, *args, database, **kwargs):
        self.database = database
        super().__init__(*args, **kwargs)

    def respond(self, status, payload, content_type):
        self.send_response(status)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(payload)))
        self.send_header("X-Content-Type-Options", "nosniff")
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(payload)

    def send_json(self, status, **data):
        self.respond(status, json.dumps(data).encode(), "application/json; charset=utf-8")

    def do_GET(self):
        name = unquote(urlsplit(self.path).path).removeprefix("/") or "index.html"
        path = (ROOT / name).resolve()
        public = path.name in PAGES and path.parent == ROOT
        public |= any(path.is_relative_to(ROOT / folder) for folder in ("assets", "styles", "scripts"))
        if not public or not path.is_file():
            self.send_error(HTTPStatus.NOT_FOUND)
            return
        self.respond(200, path.read_bytes(), mimetypes.guess_type(path)[0] or "application/octet-stream")

    do_HEAD = do_GET

    def do_POST(self):
        if urlsplit(self.path).path != "/api/enquiries":
            self.send_error(HTTPStatus.NOT_FOUND)
            return
        try:
            length = int(self.headers.get("Content-Length", "0"))
            if not 0 < length <= 65536:
                self.send_json(400, error="The brief exceeds the allowed size or is empty.")
                return
            raw = self.rfile.read(length).decode()
            content_type = self.headers.get_content_type()
            if content_type == "application/json":
                fields = json.loads(raw)
            elif content_type == "application/x-www-form-urlencoded":
                fields = {k: v[0] for k, v in parse_qs(raw, max_num_fields=8).items()}
            else:
                self.send_json(415, error="Unsupported form encoding.")
                return
            if not isinstance(fields, dict):
                raise ValueError
            brief = {}
            for key, limit in LIMITS.items():
                value = fields.get(key, "")
                if not isinstance(value, str) or len(value) > limit:
                    raise ValueError
                brief[key] = value.strip()
            if not brief["name"] or not brief["message"] or not re.fullmatch(r"[^@\s]+@[^@\s]+\.[^@\s]+", brief["email"]):
                raise ValueError
        except (ValueError, UnicodeError):
            self.send_json(400, error="Please check your name, email address, and project description.")
            return

        with self.server.submission_lock:
            now = monotonic()
            last = self.server.recent
            for address in [addr for addr, stamp in last.items() if now - stamp >= 10]:
                del last[address]
            address = self.client_address[0]
            if address in last:
                self.send_json(429, error="Please wait a few seconds before sending another brief.")
                return
            try:
                with sqlite3.connect(self.database) as db:
                    db.execute(
                        "INSERT INTO enquiries (received, name, email, business, message) VALUES (?, ?, ?, ?, ?)",
                        (datetime.now(timezone.utc).isoformat(), brief["name"], brief["email"], brief["business"], brief["message"]),
                    )
            except sqlite3.Error:
                self.send_json(503, error="Online delivery is temporarily unavailable.")
                return
            last[address] = now
        if content_type == "application/json":
            self.send_json(201, received=True)
        else:
            self.respond(201, b'<!doctype html><html lang="en"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Enquiry received | Web Affairs</title><h1>Your enquiry reached the studio.</h1><p>We will reply to the email you provided.</p><a href="/index.html">Return to Web Affairs</a></html>', "text/html; charset=utf-8")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--bind", default="127.0.0.1")
    parser.add_argument("--port", type=int, default=8000)
    parser.add_argument("--database", type=Path, default=Path.home() / ".local/state/web-affairs/enquiries.sqlite3")
    args = parser.parse_args()
    database = args.database.expanduser().resolve()
    if database.is_relative_to(ROOT):
        parser.error("Choose a private database path outside the website checkout.")
    database.parent.mkdir(mode=0o700, parents=True, exist_ok=True)
    database.touch(mode=0o600, exist_ok=True)
    with sqlite3.connect(database) as db:
        db.execute("""CREATE TABLE IF NOT EXISTS enquiries (
            id INTEGER PRIMARY KEY, received TEXT NOT NULL, name TEXT NOT NULL,
            email TEXT NOT NULL, business TEXT NOT NULL, message TEXT NOT NULL)""")
    with ThreadingHTTPServer((args.bind, args.port), partial(StudioHandler, database=database)) as server:
        server.recent = {}
        server.submission_lock = Lock()
        print(f"Web Affairs listening on {args.bind}:{server.server_port}", flush=True)
        server.serve_forever()


if __name__ == "__main__":
    main()
