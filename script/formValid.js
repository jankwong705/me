// Array of {time, location, value, error}
const form_errors = [];

const formElement = document.getElementById("send-msg");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const numField = document.getElementById("number");
const msgField = document.getElementById("message");

// Briefly show an error message, then fade it out.
function showError(output, message) {
    output.value = message;
    output.style.transition = "";
    output.style.opacity = "1";
    setTimeout(() => {
        output.style.transition = "opacity 1s ease-out";
        output.style.opacity = "0";
    }, 2000);
}

function logError(location, value, error) {
    form_errors.push({ time: Date.now(), location, value, error });
}

nameField.addEventListener("input", () => {
    if (nameField.validity.patternMismatch) {
        const original = nameField.value;
        nameField.value = nameField.value.replace(/[^a-zA-Z0-9 ]/g, "");
        showError(document.getElementById("name-pattern-mismatch"), "(Special characters disallowed.)");
        logError("name", original, "Special characters as input");
    }
});

numField.addEventListener("input", () => {
    if (numField.validity.patternMismatch) {
        const original = numField.value;
        numField.value = numField.value.replace(/[^0-9]/g, "");
        showError(document.getElementById("num-pattern-mismatch"), "(Only numbers allowed.)");
        logError("number", original, "Non-numerical values as input");
    }
});

// Strip disallowed characters from the email as they're typed.
emailField.addEventListener("input", () => {
    const allowed = /^[a-zA-Z0-9._%+\-@]*$/;
    if (!allowed.test(emailField.value)) {
        const original = emailField.value;
        emailField.value = emailField.value.replace(/[^a-zA-Z0-9._%+\-@]/g, "");
        showError(document.getElementById("email-pattern-mismatch"), "(Special characters disallowed.)");
        logError("email", original, "Special characters as input");
    }
});

// Validate the full email format when the field loses focus.
emailField.addEventListener("blur", () => {
    if (emailField.validity.patternMismatch) {
        showError(document.getElementById("email-pattern-mismatch"), "(Not a valid email.)");
        logError("email", emailField.value, "Invalid email as input");
    }
});

msgField.addEventListener("input", () => {
    const allowed = /^[a-zA-Z0-9 .,!?'\n]*$/;
    if (!allowed.test(msgField.value)) {
        const original = msgField.value;
        msgField.value = msgField.value.replace(/[^a-zA-Z0-9 .,!?'\n]/g, "");
        showError(document.getElementById("message-error"), "(Special characters disallowed.)");
        logError("message", original, "Special characters as input");
    }

    // Character counter
    const charCount = document.getElementById("char-count");
    const totalAllowed = document.getElementById("total-char");
    const charFull = document.getElementById("full-char");
    const length = msgField.value.length;
    charCount.value = length;

    const nearLimit = length >= 2500 ? "color: var(--danger); font-weight: bold;" : "";
    charCount.style.cssText = nearLimit;
    totalAllowed.style.cssText = nearLimit;

    if (length === 3000) {
        charFull.value = "Character limit reached";
        logError("message", "<Long message>", "Character limit reached");
    } else {
        charFull.value = "";
    }
});

formElement.addEventListener("submit", () => {
    document.getElementById("form-errors").value = JSON.stringify(form_errors);
});
