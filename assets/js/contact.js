const form = document.getElementById("contact-form");

const submitButton = document.getElementById("submit-button");

const emailRegex = /^[\w\W]+@[\w\W]+\.[\w\W]+$/;

submitButton.addEventListener("click", validationCheck);

function validationCheck() {
    const name = document.getElementById("user-name");
    const email = document.getElementById("user-email");
    const message = document.getElementById("message");

    if (name.value.length < 1) {
        name.placeholder = "NAME REQUIRED"
    }

    if (!emailRegex.test(email.value)) {
        email.placeholder = "VALID EMAIL REQUIRED"
        email.value = ""
    }

    if (message.value.length < 1) {
        message.placeholder = "MESSAGE REQUIRED"
    }

    if (emailRegex.test(email.value) && name.value.length > 0 && message.value.length > 0) {
        form.submit()
        name.placeholder = ""
        email.placeholder = ""
        message.placeholder = "Insert Message"
    }
    event.preventDefault()
}