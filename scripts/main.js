const mast = document.querySelector(".mast");
const menuButton = mast.querySelector(".menu-toggle");
const menu = mast.querySelector("nav");
const compact = matchMedia("(max-width: 760px)");

function setMenu(open, restoreFocus = false) {
  mast.toggleAttribute("data-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute(
    "aria-label",
    open ? "Close navigation" : "Open navigation",
  );
  document.documentElement.classList.toggle("menu-open", open);
  window.dispatchEvent(new CustomEvent("studio-menu", { detail: open }));
  if (restoreFocus) menuButton.focus();
}

menuButton.addEventListener("click", () => {
  const open = !mast.hasAttribute("data-open");
  setMenu(open);
  if (open) menu.querySelector("a").focus();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mast.hasAttribute("data-open"))
    setMenu(false, true);
});
document.addEventListener("pointerdown", (event) => {
  if (mast.hasAttribute("data-open") && !mast.contains(event.target))
    setMenu(false);
});
mast.addEventListener("focusout", (event) => {
  if (event.relatedTarget && !mast.contains(event.relatedTarget))
    setMenu(false);
});
menu.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenu(false);
});
compact.addEventListener("change", () => setMenu(false));

for (const button of document.querySelectorAll(".qa button")) {
  button.setAttribute("aria-expanded", "false");
  const answer = document.getElementById(button.getAttribute("aria-controls"));
  answer.inert = true;
  button.addEventListener("click", () => {
    const expand = button.getAttribute("aria-expanded") === "false";
    button.setAttribute("aria-expanded", String(expand));
    answer.inert = !expand;
  });
}

const gallery = document.querySelector(".gallery");
if (gallery) {
  const slides = [...gallery.querySelectorAll(".slide")];
  let current = 0;
  for (const control of gallery.querySelectorAll("[data-step]")) {
    control.addEventListener("click", () => {
      slides[current].hidden = true;
      current =
        (current + Number(control.dataset.step) + slides.length) %
        slides.length;
      const slide = slides[current];
      slide.hidden = false;
      gallery.querySelector(".caption-name").textContent = slide.dataset.name;
      gallery.querySelector(".caption-kind").textContent = slide.dataset.kind;
      gallery.querySelector(".sheet-count").textContent =
        "0" + (current + 1) + " / 03";
    });
  }
}

const form = document.getElementById("project-form");
if (form) {
  const result = document.getElementById("form-result");
  const submit = form.querySelector("[type=submit]");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (submit.disabled) return;
    const fields = Object.fromEntries(new FormData(form));
    submit.disabled = true;
    result.textContent = "Sending your brief…";
    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(fields),
        signal: AbortSignal.timeout(12000),
      });
      if (response.headers.get("Content-Type")?.includes("application/json")) {
        const data = await response.json();
        if (response.status === 201 && data.received === true) {
          result.textContent =
            "Your brief reached the studio. We’ll reply to the email address you provided.";
          form.reset();
          return;
        }
        if (response.status === 400 || response.status === 429) {
          result.textContent = data.error;
          return;
        }
      }
      throw new Error("Delivery unconfirmed");
    } catch {
      const subject = "Website enquiry from " + fields.name;
      const body = [
        fields.name,
        fields.email,
        fields.business,
        "",
        fields.message,
      ].join("\n");
      const draft = document.createElement("a");
      draft.textContent = "Open my email draft";
      draft.href =
        "mailto:queries@domain.com?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);
      result.replaceChildren(
        "Online delivery could not be confirmed. ",
        draft,
        " and send it to the studio, or email queries@domain.com directly.",
      );
    } finally {
      submit.disabled = false;
    }
  });
}
