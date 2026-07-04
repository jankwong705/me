// Light/dark theme toggle. Dark styling is driven entirely by the `dark-mode`
// class on <body> (see styles.css), which also swaps the sun/moon icon.
const DARK = "dark-mode";
const toggle = document.getElementById("theme-toggle");

function applyMode(dark) {
    document.body.classList.toggle(DARK, dark);
    // Keep this page's native chrome (scrollbar, form controls, canvas) in step
    // with the site theme. Scoped to this document only — it can't affect other
    // tabs, the browser, or the OS.
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
    if (toggle) toggle.setAttribute("aria-pressed", String(dark));
    localStorage.setItem("mode", dark ? "dark" : "light");
}

// Restore the saved preference (defaults to light).
applyMode(localStorage.getItem("mode") === "dark");

if (toggle) {
    toggle.addEventListener("click", () => {
        applyMode(!document.body.classList.contains(DARK));
    });
}
