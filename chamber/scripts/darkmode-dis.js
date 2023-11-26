document.addEventListener("DOMContentLoaded", function () {
    const darkmode = document.getElementById("dark-mode");
    const bodyElement = document.body;
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    const logoImage = document.getElementById("logoImage");
    const meetgreetContainer = document.getElementById("meetgreetContainer");
    const mainSection = document.querySelector(".discoverMain");
    const discoverPageItem = document.querySelector(".DiscoverPage-item-1");
  
    // Add a class to the body to identify the current mode
    const darkModeClass = "dark-mode";
  
    darkmode.addEventListener("click", () => {
      if (darkmode.textContent === "DARK") {
        // Apply dark mode styles
        document.documentElement.style.setProperty("--text-color", "white");
        document.documentElement.style.setProperty("--background-color", "black");
        document.documentElement.style.setProperty(
          "--hover-background-color",
          "#442211"
        );
        document.documentElement.style.setProperty("--hover-color", "#dda15e");
        bodyElement.style.backgroundColor = "black";
        bodyElement.classList.add(darkModeClass);
        document.documentElement.style.setProperty(
          "--header-background-color",
          "black"
        );
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
  
        meetgreetContainer.style.color = "white";
        meetgreetContainer.style.backgroundColor = "black";
  
        mainSection.style.color = "white"; // Set text color in the main section to white for dark mode
  
        logoImage.src = "../chamber/images/logo-header2.webp";
  
        // Set text color of every h1 and h2 tag in the main section to white
        mainSection.querySelectorAll("h1, h2").forEach((heading) => {
          heading.style.color = "white";
        });
      } else {
        // Apply light mode styles
        document.documentElement.style.setProperty("--text-color", "black");
        document.documentElement.style.setProperty(
          "--background-color",
          "#ffffff"
        );
        document.documentElement.style.setProperty(
          "--hover-background-color",
          "#bc6c25"
        );
        document.documentElement.style.setProperty("--hover-color", "black");
        bodyElement.style.backgroundColor = "";
        bodyElement.classList.remove(darkModeClass);
        document.documentElement.style.setProperty(
          "--header-background-color",
          "rgba(245, 245, 220)"
        );
        header.style.backgroundColor = "var(--header-background-color)";
        header.querySelector("h1").style.color = "black";
        discoverPageItem.querySelector("h2").style.color = ""; // Reset H2 color for light mode
        nav.style.backgroundColor = "#175846";
  
        const cards = document.querySelectorAll(".card");
        cards.forEach((card) => {
          card.style.backgroundColor = "";
          card.style.color = "black";
        });
  
        const card3s = document.querySelectorAll(".card3");
        card3s.forEach((card3) => {
          card3.style.color = "black";
        });
  
        meetgreetContainer.style.color = "black";
  
        mainSection.style.color = "black"; // Set text color in the main section to black for light mode
  
        logoImage.src = "../chamber/images/logo2.webp";
  
        // Reset text color of every h1 and h2 tag in the main section
        mainSection.querySelectorAll("h1, h2").forEach((heading) => {
          heading.style.color = ""; // Revert to original color
        });
      }
  
      // Toggle button text content and set the text color for 'LIGHT'
      darkmode.textContent = darkmode.textContent === "DARK" ? "LIGHT" : "DARK";
      darkmode.style.color =
        darkmode.textContent === "LIGHT" ? "white" : "black";
    });
  });
  