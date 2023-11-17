const confirmInput = document.getElementById("confirm");
const passwordInput = document.getElementById("password");
const messageSpan = document.getElementById("message");

confirmInput.addEventListener('blur', () => {
    if (passwordInput.value !== confirmInput.value) {
        messageSpan.innerHTML = "Passwords do not match!";
        passwordInput.focus();
    } else {
        messageSpan.innerHTML = "";
    }
});
