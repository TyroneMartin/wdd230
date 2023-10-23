const darkmode = document.querySelector('#dark-mode');
const bodyelt = document.querySelector("body");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const logoImage = document.getElementById("logoImage"); // Changed to getElementById

darkmode.addEventListener('click', () => {
    if (darkmode.textContent === 'DARK') {
        // Apply dark mode styles
        document.documentElement.style.setProperty('--text-color', 'white');
        document.documentElement.style.setProperty('--background-color', 'black');
        document.documentElement.style.setProperty('--hover-background-color', '#442211');
        document.documentElement.style.setProperty('--hover-color', '#dda15e');
        bodyelt.style.backgroundColor = 'black'; // Set the background color of the body to black
        bodyelt.classList.add('dark-mode');
        document.documentElement.style.setProperty('--header-background-color', 'black');
        header.style.backgroundColor = 'var(--header-background-color)';
        header.querySelector('h1').style.color = 'white'; // Change the color of the h1 tag to white
        nav.style.backgroundColor = '#2c2c2c'; // Set to the specified background color
        darkmode.textContent = 'LIGHT';
        darkmode.style.color = 'white'; // Change the text color to white

        // Change the background color of all elements with class 'card' to 'rgb(44, 44, 44)'
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.backgroundColor = 'rgb(44, 44, 44)';
            card.style.color = 'white'; // Set the text color to white
        });

        // Change image source for dark mode
        logoImage.src = "../chamber/images/logo-header2.webp";
    } else {
        // Apply light mode styles
        document.documentElement.style.setProperty('--text-color', 'black');
        document.documentElement.style.setProperty('--background-color', '#ffffff');
        document.documentElement.style.setProperty('--hover-background-color', '#bc6c25');
        document.documentElement.style.setProperty('--hover-color', 'black');
        bodyelt.style.backgroundColor = ''; // Remove the inline style for background color
        bodyelt.classList.remove('dark-mode');
        document.documentElement.style.setProperty('--header-background-color', 'rgba(245, 245, 220)');
        header.style.backgroundColor = 'var(--header-background-color)';
        header.querySelector('h1').style.color = 'black'; // Change the color of the h1 tag back to black
        nav.style.backgroundColor = '#175846'; // Set to the specified background color
        darkmode.textContent = 'DARK';
        darkmode.style.color = 'black'; // Change the text color back to black

        // Restore the background color of all elements with class 'card'
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.backgroundColor = ''; // Remove the inline style
            card.style.color = 'black'; // Set the text color to black for the light mode
        });

        // Change image source back to the original
        logoImage.src = "../chamber/images/logo2.webp";
    }
});
