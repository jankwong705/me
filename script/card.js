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

        // Meta collapsed to one muted line: employer (optionally linked) · location · time.
        const meta = [];
        if (d.employer) {
            meta.push(d.employerLink
                ? `<a href="${d.employerLink}" class="card-employer">${d.employer}</a>`
                : d.employer);
        }
        if (d.location) meta.push(d.location);
        if (d.time) meta.push(d.time);

        const items = (d.items || []).map(i => `<li>${i}</li>`).join("");

        const link = (d.link && d.link !== "n/a")
            ? `<a href="${d.link}" class="card-link">Link: ${d.link}</a>`
            : "";

        const picture = d.imgSrc
            ? `<picture><img src="${d.imgSrc}" alt="${d.altText || ""}" class="card-pic"></picture>`
            : "";

        this.innerHTML = `
            <h3 class="card-title">${d.title || ""}</h3>
            ${meta.length ? `<p class="card-meta">${meta.join(" · ")}</p>` : ""}
            <details class="card-details">
                <summary>Details</summary>
                <ul>${items}</ul>
                ${link}
                ${picture}
            </details>`;
    }
}

customElements.define("info-card", InfoCard);
