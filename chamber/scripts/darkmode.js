document.addEventListener("DOMContentLoaded", function () {
  const darkmode = document.getElementById("dark-mode");
  const bodyElement = document.body;
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const calloutTime = document.querySelector(".callout-time");
  const box = document.querySelector(".box");
  const logoImage = document.getElementById("logoImage");
  const weatherSection = document.getElementById("weatherSection");
  const meetgreetContainer = document.getElementById("meetgreetContainer");
  const companyInfoContainer = document.getElementById("companyInfoContainer");
  const homepagePhraseContainer = document.getElementById("homepage-phrase-Container");

  // Add a class to the body to identify the current mode
  const darkModeClass = "dark-mode";

  // Function to set colors for h1, h2, and p tags inside companyInfoContainer
  function setCompanyInfoColors(textColor, bgColor) {
    const companyInfoH1 = companyInfoContainer.querySelector("h1");
    const companyInfoH2 = companyInfoContainer.querySelector("h2");
    const companyInfoP = companyInfoContainer.querySelectorAll("p");

    companyInfoH1.style.color = textColor;
    companyInfoH2.style.color = textColor;

    companyInfoP.forEach((p) => {
      p.style.color = textColor;
    });

    companyInfoContainer.style.backgroundColor = bgColor;
  }

  // Function to set colors for h1, h2, and p tags inside weatherSection
  function setWeatherSectionColors(textColor) {
    const weatherH1 = weatherSection.querySelector("h1");
    const weatherH2 = weatherSection.querySelectorAll("h2");
    const weatherP = weatherSection.querySelectorAll("p");

    weatherH1.style.color = textColor;

    weatherH2.forEach((h2) => {
      h2.style.color = textColor;
    });

    weatherP.forEach((p) => {
      p.style.color = textColor;
    });
  }

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
      box.style.backgroundColor = "#3b3b3bc4";
      calloutTime.style.backgroundColor = "#2c2c2c";
      calloutTime.style.color = "white"; // Set the text color to white for dark mode

      const cards = document.querySelectorAll(".card");
      cards.forEach((card) => {
        card.style.backgroundColor = "rgb(44, 44, 44)";
        card.style.color = "white";
      });

      const card3s = document.querySelectorAll(".card3");
      card3s.forEach((card3) => {
        card3.style.color = "white";
      });

      weatherSection.style.color = "white"; // Set the text color to white for dark mode
      meetgreetContainer.style.color = "white";
      meetgreetContainer.style.backgroundColor = "";

      setCompanyInfoColors("white", "black");
      setWeatherSectionColors("white");

      homepagePhraseContainer.querySelector(".homepage-phrase-h3").style.color = "#db3737"; // Change text color for dark mode

      logoImage.src = "../chamber/images/logo-header2.webp";
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
      nav.style.backgroundColor = "#175846";
      box.style.backgroundColor = "#175846c4";
      calloutTime.style.backgroundColor = "#175846";
      calloutTime.style.color = "white"; // Set the text color to white for light mode

      const cards = document.querySelectorAll(".card");
      cards.forEach((card) => {
        card.style.backgroundColor = "";
        card.style.color = "black";
      });

      const card3s = document.querySelectorAll(".card3");
      card3s.forEach((card3) => {
        card3.style.color = "black";
      });

      weatherSection.style.color = "black"; // Set the text color to black for light mode

      setCompanyInfoColors("#000", "");
      setWeatherSectionColors("black");

      homepagePhraseContainer.querySelector(".homepage-phrase-h3").style.color = "brown"; // Change text color for light mode

      logoImage.src = "../chamber/images/logo2.webp";
    }

    // Toggle button text content and set the text color for 'LIGHT'
    darkmode.textContent = darkmode.textContent === "DARK" ? "LIGHT" : "DARK";
    darkmode.style.color =
      darkmode.textContent === "LIGHT" ? "white" : "black";
  });
});
