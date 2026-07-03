// Shared page chrome (nav header + footer) injected as custom elements so the
// markup lives in one place. Each page uses <site-header></site-header> and
// <site-footer></site-footer>; a <noscript> fallback nav keeps the site
// navigable when JavaScript is disabled.
const NAV_LINKS = [
    { href: "index.html", label: "Home" },
    { href: "about.html", label: "About Me" },
    { href: "exp.html", label: "Experiences" },
    { href: "project.html", label: "Projects" },
    { href: "contact.html", label: "Contact Me" }
];

const navItems = NAV_LINKS
    .map(l => `<li><a href="${l.href}">${l.label}</a></li>`)
    .join("\n                ");

class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <nav>
                    <ul>
                ${navItems}
                    </ul>
                    <label class="switch">
                        <input type="checkbox" id="light-switch" checked>
                        <span class="slider round"></span>
                    </label>
                </nav>
            </header>
            <hr>`;
    }
}

class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <hr>
            <footer>
                <address>Contact me at: <a href="mailto:jankwong705@gmail.com">jankwong705@gmail.com</a></address>
                <address>LinkedIn: <a href="https://www.linkedin.com/in/jankwong705/">https://www.linkedin.com/in/jankwong705/</a></address>
                <address>GitHub: <a href="https://github.com/jankwong705">https://github.com/jankwong705</a></address>
            </footer>`;
    }
}

customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);
