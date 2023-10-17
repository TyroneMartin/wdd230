const darkmode = document.querySelector('#dark-mode');
const bodyelt = document.querySelector("body");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const logoImage = document.querySelector(".logo2"); // Assuming the class name is 'logo2'

darkmode.addEventListener('click', () => {
    if (darkmode.textContent === 'DARK') {
        // Apply dark mode styles
        document.documentElement.style.setProperty('--text-color', '#dda15e');
        document.documentElement.style.setProperty('--background-color', 'black');
        document.documentElement.style.setProperty('--hover-background-color', '#442211');
        document.documentElement.style.setProperty('--hover-color', '#dda15e');
        bodyelt.style.backgroundColor = 'black';
        document.documentElement.style.setProperty('--header-background-color', 'black');
        header.style.backgroundColor = 'var(--header-background-color)';
        nav.style.backgroundColor = '#2c2c2c'; // Set to the specified background color
        darkmode.textContent = 'LIGHT';
        // Change image source for dark mode
        // logoImage.src = "..\chamber\images\logo-footer.png";
    } else {
        // Apply light mode styles
        document.documentElement.style.setProperty('--text-color', 'black');
        document.documentElement.style.setProperty('--background-color', '#dda15e');
        document.documentElement.style.setProperty('--hover-background-color', '#bc6c25');
        document.documentElement.style.setProperty('--hover-color', 'black');
        bodyelt.style.backgroundColor = '#ffffff';
        document.documentElement.style.setProperty('--header-background-color', 'white');
        header.style.backgroundColor = 'var(--header-background-color)';
        nav.style.backgroundColor = '#175846'; // Set to the specified background color
        darkmode.textContent = 'DARK';
        // Change image source back to the original
        logoImage.src = "../chamber/images/logo2.png";
    }
});
