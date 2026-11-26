const root = document.documentElement;
const reduce = matchMedia("(prefers-reduced-motion: reduce)");
const fine = matchMedia("(pointer: fine)");
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let lenis;

function configureScroll() {
  lenis?.destroy();
  lenis =
    !reduce.matches && window.Lenis
      ? new Lenis({
          duration: 1.08,
          easing: (t) => 1 - Math.pow(1 - t, 3.8),
          autoRaf: true,
          anchors: true,
        })
      : null;
}
configureScroll();
reduce.addEventListener("change", configureScroll);
window.addEventListener("studio-menu", (event) => {
  if (event.detail) lenis?.stop();
  else lenis?.start();
});

const progress = document.querySelector(".progress");
function paintProgress() {
  const travel = root.scrollHeight - innerHeight;
  progress.style.transform =
    "scaleX(" +
    (travel > 0 ? Math.min(1, Math.max(0, scrollY / travel)) : 0) +
    ")";
}
addEventListener("scroll", paintProgress, { passive: true });
new ResizeObserver(paintProgress).observe(document.body);

async function introducePage() {
  if (reduce.matches) return;
  if (root.classList.contains("arriving")) {
    await delay(150);
    root.classList.add("reveal-page");
    await delay(500);
    root.classList.remove("arriving", "reveal-page");
    return;
  }
  root.classList.add("loading");
  const start = performance.now();
  const count = document.querySelector(".load-count");
  let ready = false;
  function tick(now) {
    if (ready) return;
    count.textContent =
      String(Math.min(99, Math.floor((now - start) / 15))).padStart(2, "0") +
      "%";
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
  await Promise.all([
    delay(1500),
    document.fonts.ready,
    ...Array.from(document.images, (img) => img.decode().catch(() => {})),
  ]);
  ready = true;
  count.textContent = "100%";
  root.classList.add("loaded");
  await delay(510);
  root.classList.remove("loading", "loaded");
}
introducePage();

document.addEventListener(
  "click",
  async (event) => {
    const anchor = event.target.closest("a[href]");
    if (
      !anchor ||
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      anchor.target ||
      anchor.hasAttribute("download") ||
      reduce.matches
    )
      return;
    const url = new URL(anchor.href);
    if (
      url.origin !== location.origin ||
      !url.pathname.endsWith(".html") ||
      url.pathname === location.pathname
    )
      return;
    event.preventDefault();
    if (root.classList.contains("departing")) return;
    root.classList.add("departing");
    await delay(470);
    try {
      sessionStorage.setItem("wa-arrival", url.pathname);
    } catch {
      /* Navigation also works without storage. */
    }
    location.assign(url.href);
  },
  true,
);
window.addEventListener("pageshow", () => root.classList.remove("departing"));

if (!reduce.matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.remove("waiting");
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px 10px" },
  );
  for (const item of document.querySelectorAll(
    "main section h2, .feature-card, .steps li, .principle-grid article, .spec-lines article",
  )) {
    if (item.getBoundingClientRect().top < innerHeight) continue;
    item.classList.add("motion-ready", "waiting");
    observer.observe(item);
  }
}

const dot = document.createElement("i");
const ring = document.createElement("i");
dot.className = "pointer-dot";
ring.className = "pointer-ring";
dot.ariaHidden = ring.ariaHidden = "true";
document.body.append(dot, ring);
let x = 0,
  y = 0,
  trailX = 0,
  trailY = 0,
  pointerFrame = 0;
function follow() {
  trailX += (x - trailX) * 0.24;
  trailY += (y - trailY) * 0.24;
  ring.style.translate = trailX + "px " + trailY + "px";
  pointerFrame =
    Math.abs(x - trailX) + Math.abs(y - trailY) > 0.15
      ? requestAnimationFrame(follow)
      : 0;
}
function hidePointer() {
  root.classList.remove("cursor-on");
}
document.addEventListener(
  "pointermove",
  (event) => {
    if (!fine.matches || reduce.matches || event.pointerType === "touch") {
      hidePointer();
      return;
    }
    x = event.clientX;
    y = event.clientY;
    if (!root.classList.contains("cursor-on")) {
      trailX = x;
      trailY = y;
    }
    root.classList.add("cursor-on");
    dot.style.translate = x + "px " + y + "px";
    ring.classList.toggle(
      "active",
      Boolean(event.target.closest("a,button,input,textarea")),
    );
    if (!pointerFrame) follow();
  },
  { passive: true },
);
document.addEventListener("pointerout", (e) => {
  if (!e.relatedTarget) hidePointer();
});
document.addEventListener("keydown", hidePointer);
window.addEventListener("blur", hidePointer);
for (const card of document.querySelectorAll(".feature-card")) {
  card.addEventListener("pointermove", (event) => {
    if (reduce.matches || !fine.matches || event.pointerType === "touch")
      return;
    const box = card.getBoundingClientRect();
    card.style.setProperty(
      "--rx",
      (0.5 - (event.clientY - box.top) / box.height) * 3 + "deg",
    );
    card.style.setProperty(
      "--ry",
      ((event.clientX - box.left) / box.width - 0.5) * 3 + "deg",
    );
  });
  card.addEventListener("pointerleave", () => {
    card.style.removeProperty("--rx");
    card.style.removeProperty("--ry");
  });
}

// The stationary wrapper measures the button's unshifted position.
for (const button of document.querySelectorAll(
  ".actions .solid, .closing .button, .studio-contact .button",
)) {
  const magnet = document.createElement("span");
  magnet.className = "magnet";
  button.before(magnet);
  magnet.append(button);
  document.addEventListener(
    "pointermove",
    (event) => {
      if (reduce.matches || !fine.matches || event.pointerType === "touch")
        return;
      const box = magnet.getBoundingClientRect();
      const dx = event.clientX - (box.left + box.width / 2);
      const dy = event.clientY - (box.top + box.height / 2);
      const distance = Math.hypot(
        Math.max(0, Math.abs(dx) - box.width / 2),
        Math.max(0, Math.abs(dy) - box.height / 2),
      );
      const pull = Math.max(0, 1 - distance / 60) * 0.055;
      button.style.transform = pull
        ? "translate(" + dx * pull + "px," + dy * pull + "px)"
        : "";
    },
    { passive: true },
  );
}
