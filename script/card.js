// Shared <info-card> web component used for both experiences and projects.
// Set a plain data object on the element's `data` property before inserting it.
class InfoCard extends HTMLElement {
    set data(value) {
        this._data = value;
        if (this.isConnected) this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const d = this._data || {};

        // Italic meta lines: employer (optionally linked), location, time.
        const meta = [];
        if (d.employer) {
            meta.push(d.employerLink
                ? `<i><a href="${d.employerLink}">${d.employer}</a></i>`
                : `<i>${d.employer}</i>`);
        }
        if (d.location) meta.push(`<i>${d.location}</i>`);
        if (d.time) meta.push(`<i>${d.time}</i>`);

        // Detail bullets, plus an optional project link.
        const items = (d.items || []).map(i => `<li>${i}</li>`);
        if (d.link && d.link !== "n/a") {
            items.push(`<li><a href="${d.link}"><strong>Link to project: ${d.link}</strong></a></li>`);
        }

        const picture = d.imgSrc
            ? `<picture><img src="${d.imgSrc}" alt="${d.altText || ""}" class="card-pic"></picture>`
            : "";

        this.innerHTML = `
            <h3>${d.title || ""}</h3>
            ${meta.join(" <br>\n            ")}${meta.length ? " <br>" : ""}
            <details>
                <summary>Details</summary>
                <ul>
                    ${items.join("\n                    ")}
                </ul>
            </details>
            ${picture}`;
    }
}

customElements.define("info-card", InfoCard);
