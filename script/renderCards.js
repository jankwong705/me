// Renders a list of data objects into <info-card> elements inside a container.
import "./card.js";

export function renderCards(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;
    items.forEach(d => {
        const card = document.createElement("info-card");
        card.data = d;
        container.appendChild(card);
    });
}
