document.addEventListener("DOMContentLoaded", function () {
    const darkmode = document.getElementById("dark-mode");
    const bodyElement = document.body;
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    const logoImage = document.getElementById("logoImage");
    const mainSection = document.querySelector(".discoverMain");
    const discoverPageItem = document.querySelectorAll(".DiscoverPage-item-1");

    // Add a class to the body to identify the current mode
    const darkModeClass = "dark-mode";

    darkmode.addEventListener("click", () => {
        if (darkmode.textContent === "DARK") {
            // Apply dark mode styles
            document.documentElement.style.setProperty("--text-color", "white");
            document.documentElement.style.setProperty("--background-color", "black");
            document.documentElement.style.setProperty("--hover-background-color", "#442211");
            document.documentElement.style.setProperty("--hover-color", "#dda15e");
            bodyElement.style.backgroundColor = "black";
            bodyElement.classList.add(darkModeClass);
            document.documentElement.style.setProperty("--header-background-color", "black");
            header.style.backgroundColor = "var(--header-background-color)";
            header.querySelector("h1").style.color = "white";
            nav.style.backgroundColor = "#2c2c2c";

            const cards = document.querySelectorAll(".card");
            cards.forEach((card) => {
                card.style.backgroundColor = "rgb(44, 44, 44)";
                card.style.color = "white";
            });

            const card3s = document.querySelectorAll(".card3");
            card3s.forEach((card3) => {
                card3.style.color = "white";
            });

            logoImage.src = "../chamber/images/logo-header2.webp";

            document.querySelectorAll("p").forEach((paragraph) => {
                paragraph.style.color = "white";
            });

            document.querySelectorAll("#message").forEach((container) => {
                container.style.background = "rgb(44, 44, 44)";
            });

            document.querySelectorAll(".discoverMessageContainer1, .discoverMessageContainer2, .discoverMessageContainer3").forEach((container) => {
                container.style.background = "rgb(44, 44, 44, 0.95)";
            });
        } else {
            // Restore default light mode styles
            document.documentElement.style.removeProperty("--text-color");
            document.documentElement.style.removeProperty("--background-color");
            document.documentElement.style.removeProperty("--hover-background-color");
            document.documentElement.style.removeProperty("--hover-color");
            bodyElement.style.backgroundColor = "";
            bodyElement.classList.remove(darkModeClass);
            document.documentElement.style.removeProperty("--header-background-color");
            header.style.backgroundColor = "";
            header.querySelector("h1").style.color = "";
            discoverPageItem.forEach(item => {
                item.querySelector("h2").style.color = "";
            });
            nav.style.backgroundColor = "";

            const cards = document.querySelectorAll(".card");
            cards.forEach((card) => {
                card.style.backgroundColor = "";
                card.style.color = "";
            });

            const card3s = document.querySelectorAll(".card3");
            card3s.forEach((card3) => {
                card3.style.color = "";
            });

            logoImage.src = "../chamber/images/logo2.webp";

            document.querySelectorAll("p").forEach((paragraph) => {
                paragraph.style.color = "";
            });

            document.querySelectorAll(".discoverMessageContainer1, .discoverMessageContainer2, .discoverMessageContainer3").forEach((container) => {
                container.style.background = "";
            });
        }

        // Toggle button text content and set the text color for 'LIGHT'
        darkmode.textContent = darkmode.textContent === "DARK" ? "LIGHT" : "DARK";
        darkmode.style.color = darkmode.textContent === "LIGHT" ? "white" : "black";
    });
});
