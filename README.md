# Web Affairs

Four responsive pages for the Web Affairs website subscription. The supplied business details live in `business.json`. All browser assets, including fonts and Lenis, are served locally.

## Run the site

Use Python 3.9 or newer. From the checkout root, run this command and open the port it prints.

```sh
python3 server.py --port 8000
```

The server accepts the contact form at `POST /api/enquiries` and writes each validated brief to SQLite before acknowledging receipt. The default database is `~/.local/state/web-affairs/enquiries.sqlite3`. Set `--database /path/to/enquiries.sqlite3` to use a private writable location outside the checkout. For a publicly hosted instance, place the service behind an HTTPS reverse proxy and keep the database on persistent storage.

Studio operators can read received briefs locally with a SQLite client:

```sh
sqlite3 -header -column ~/.local/state/web-affairs/enquiries.sqlite3 'SELECT id, received, name, email, business, message FROM enquiries ORDER BY id DESC;'
```

The contact form stores enquiries for operator review. It does not send automatic email notifications. On static hosting, the browser offers an addressed email draft if online delivery cannot be confirmed. The visitor sends that draft from their mail application.

## Site structure

`index.html`, `services.html`, `about.html`, and `contact.html` have distinct page content. Shared styles live in `styles/` and interactions in `scripts/`. The architectural image is an original generated illustration of the Forma design study. The three studies are studio concepts. Font and Lenis licenses accompany the vendored files.
