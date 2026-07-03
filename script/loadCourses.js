import { courses } from "./coursesData.js";

const table = document.getElementById("courses");

if (table) {
    courses.forEach(course => {
        const row = document.createElement("tr");

        const code = document.createElement("td");
        code.textContent = course.code;
        row.appendChild(code);

        const title = document.createElement("td");
        title.textContent = course.title;
        row.appendChild(title);

        table.appendChild(row);
    });
}
