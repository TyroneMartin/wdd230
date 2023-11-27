document.addEventListener("DOMContentLoaded", function () {
    const darkmode = document.getElementById("dark-mode");
    const bodyElement = document.body;
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    const logoImage = document.getElementById("logoImage");
    const joinMain = document.getElementById("join-main");

    // Add a class to the body to identify the current mode
    const darkModeClass = "dark-mode";

    darkmode.addEventListener("click", () => {
        if (darkmode.textContent === "DARK") {
            // Apply dark mode styles
            bodyElement.classList.add(darkModeClass);
            header.style.backgroundColor = "#000000";
            header.querySelector("h1").style.color = "white";
            nav.style.backgroundColor = "#2c2c2c";
            logoImage.src = "../chamber/images/logo-header2.webp";
            joinMain.style.backgroundColor = "rgb(44, 44, 44)";
        } else {
            // Restore default light mode styles
            bodyElement.classList.remove(darkModeClass);
            header.style.backgroundColor = "";
            header.querySelector("h1").style.color = "";
            nav.style.backgroundColor = "";
            logoImage.src = "../chamber/images/logo2.webp";
            joinMain.style.backgroundColor = "";
        }

        // Toggle button text content and set the text color for 'LIGHT'
        darkmode.textContent = darkmode.textContent === "DARK" ? "LIGHT" : "DARK";
        darkmode.style.color = darkmode.textContent === "LIGHT" ? "white" : "black";
    });
});
