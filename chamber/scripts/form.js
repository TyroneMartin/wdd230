document.addEventListener("DOMContentLoaded", function () {
    var passwordInput = document.getElementById("password");
    var confirmInput = document.getElementById("confirm");
    var passwordMessage = document.getElementById("password-message");
    var form = document.querySelector("form");

    confirmInput.addEventListener("input", function () {
        if (confirmInput.value !== passwordInput.value) {
            passwordMessage.textContent = "Password did not match, please reenter your password";
            form.querySelector("button").disabled = true; // Disable the submit button
        } else {
            passwordMessage.textContent = "";
            form.querySelector("button").disabled = false; // Enable the submit button
        }
    });

    // Set default rating to 1
    var ratingInput = document.getElementById("rating");
    ratingInput.value = 1;

    form.addEventListener("submit", function (event) {
        if (confirmInput.value !== passwordInput.value) {
            event.preventDefault(); // Prevent form submission
            passwordMessage.textContent = "Password did not match, please reenter your password";
            if (form.querySelector("button").disabled) {
                alert("Passwords must match. Please reenter your password.");
            }
        }
    });
});
