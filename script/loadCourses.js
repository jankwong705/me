import { courses } from "./coursesData.js";

const container = document.getElementById("courses");

if (container) {
    courses.forEach(course => {
        const chip = document.createElement("span");
        chip.className = "course-chip";
        chip.textContent = `${course.code} · ${course.title}`;
        container.appendChild(chip);
    });
}
