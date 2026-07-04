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

// Mark the link for the current page so it can be highlighted.
const currentPage = location.pathname.split("/").pop() || "index.html";

const navItems = NAV_LINKS
    .map(l => {
        const active = l.href === currentPage ? ' class="active"' : "";
        return `<li><a href="${l.href}"${active}>${l.label}</a></li>`;
    })
    .join("\n                ");

class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="site-nav">
                <a href="index.html" class="brand">Jan Kwong</a>
                <nav>
                    <ul>
                ${navItems}
                    </ul>
                    <button type="button" id="theme-toggle" class="theme-toggle" aria-label="Toggle dark mode">
                        <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="4"></circle>
                            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
                        </svg>
                        <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </button>
                </nav>
            </header>`;
        this.setupSlidingUnderline();
    }

    // Underline that slides to whichever tab the cursor is over, snapping back
    // to the current page's link when the cursor leaves the nav.
    setupSlidingUnderline() {
        const ul = this.querySelector(".site-nav ul");
        if (!ul) return;

        const indicator = document.createElement("span");
        indicator.className = "nav-indicator";
        ul.appendChild(indicator);

        const links = [...ul.querySelectorAll("li a")];
        const activeLink = ul.querySelector("li a.active") || links[0];

        const moveTo = (el) => {
            if (!el) return;
            indicator.style.left = `${el.offsetLeft}px`;
            indicator.style.top = `${el.offsetTop + el.offsetHeight - 2}px`;
            indicator.style.width = `${el.offsetWidth}px`;
        };
        const reset = () => moveTo(activeLink);

        links.forEach(a => a.addEventListener("mouseenter", () => moveTo(a)));
        ul.addEventListener("mouseleave", reset);

        requestAnimationFrame(reset);
        window.addEventListener("load", reset);
        window.addEventListener("resize", reset);
        if (document.fonts && document.fonts.ready) document.fonts.ready.then(reset);
    }
}

class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <hr>
            <footer>
                <address>Email: <a href="mailto:jankwong705@gmail.com">jankwong705@gmail.com</a></address>
                <address>LinkedIn: <a href="https://www.linkedin.com/in/jankwong705/">https://www.linkedin.com/in/jankwong705/</a></address>
                <address>GitHub: <a href="https://github.com/jankwong705">https://github.com/jankwong705</a></address>
            </footer>`;
    }
}

customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);
