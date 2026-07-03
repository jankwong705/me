// Light/dark theme toggle. Dark styling is driven entirely by the `dark-mode`
// class on <body> (see styles.css), so no per-element class juggling is needed.
const DARK = "dark-mode";
const lightSwitch = document.getElementById("light-switch");

function applyMode(dark) {
    document.body.classList.toggle(DARK, dark);
    if (lightSwitch) lightSwitch.checked = !dark;
    localStorage.setItem("mode", dark ? "dark" : "light");
}

// Restore the saved preference (defaults to light).
applyMode(localStorage.getItem("mode") === "dark");

if (lightSwitch) {
    lightSwitch.addEventListener("change", () => applyMode(!lightSwitch.checked));
}
