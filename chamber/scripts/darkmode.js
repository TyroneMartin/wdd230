document.addEventListener('DOMContentLoaded', function () {
    const darkmode = document.getElementById('dark-mode');
    const bodyElement = document.body;
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const calloutTime = document.querySelector('.callout-time');
    const box = document.querySelector('.box');
    const logoImage = document.getElementById('logoImage');
    const weatherSection = document.getElementById('weatherSection');
    const meetgreetContainer = document.getElementById('meetgreetContainer');


    // Add a class to the body to identify the current mode
    const darkModeClass = 'dark-mode';

    // Add hover effect for buttons
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            if (bodyElement.classList.contains(darkModeClass)) {
                // Dark mode hover effect
                button.style.backgroundColor = 'green'; // Set dark mode hover color
            } else {
                // Light mode hover effect
                button.style.backgroundColor = 'rgb(102, 167, 102)'; // Set light mode hover color
            }
        });

        button.addEventListener('mouseout', () => {
            // Reset the background color on mouseout
            button.style.backgroundColor = '';
        });
    });

    darkmode.addEventListener('click', () => {
        if (darkmode.textContent === 'DARK') {
            // Apply dark mode styles
            document.documentElement.style.setProperty('--text-color', 'white');
            document.documentElement.style.setProperty('--background-color', 'black');
            document.documentElement.style.setProperty('--hover-background-color', '#442211');
            document.documentElement.style.setProperty('--hover-color', '#dda15e');
            bodyElement.style.backgroundColor = 'black';
            bodyElement.classList.add(darkModeClass);
            document.documentElement.style.setProperty('--header-background-color', 'black');
            header.style.backgroundColor = 'var(--header-background-color)';
            header.querySelector('h1').style.color = 'white';
            nav.style.backgroundColor = '#2c2c2c';
            box.style.backgroundColor = '#3b3b3bc4';
            calloutTime.style.backgroundColor = '#2c2c2c';

            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                card.style.backgroundColor = 'rgb(44, 44, 44)';
                card.style.color = 'white';
            });

            const card3s = document.querySelectorAll('.card3');
            card3s.forEach(card3 => {
                card3.style.color = 'white';
            });

            weatherSection.style.color = 'white'; // Set the text color to white for dark mode
            meetgreetContainer.style.color = 'white';
            meetgreetContainer.style,backgroundColor= 'black';

            const h2Elements = weatherSection.querySelectorAll('h2');
            h2Elements.forEach(h2 => {
                h2.style.color = 'white';
            });

            const pElements = weatherSection.querySelectorAll('p');
            pElements.forEach(p => {
                p.style.color = 'white';
            });

            logoImage.src = "../chamber/images/logo-header2.webp";
        } else {
            // Apply light mode styles
            document.documentElement.style.setProperty('--text-color', 'black');
            document.documentElement.style.setProperty('--background-color', '#ffffff');
            document.documentElement.style.setProperty('--hover-background-color', '#bc6c25');
            document.documentElement.style.setProperty('--hover-color', 'black');
            bodyElement.style.backgroundColor = '';
            bodyElement.classList.remove(darkModeClass);
            document.documentElement.style.setProperty('--header-background-color', 'rgba(245, 245, 220)');
            header.style.backgroundColor = 'var(--header-background-color)';
            header.querySelector('h1').style.color = 'black';
            nav.style.backgroundColor = '#175846';
            box.style.backgroundColor = '#175846c4';
            calloutTime.style.backgroundColor = '#175846';
            meetgreetContainer.style.color = 'black';
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                card.style.backgroundColor = '';
                card.style.color = 'black';
            });

            const card3s = document.querySelectorAll('.card3');
            card3s.forEach(card3 => {
                card3.style.color = 'black';
            });

            weatherSection.style.color = '#4e565b'; // Set the text color to #4e565b for light mode

            const h2ElementsLight = weatherSection.querySelectorAll('h2');
            h2ElementsLight.forEach(h2 => {
                h2.style.color = '#4e565b';
            });

            const pElementsLight = weatherSection.querySelectorAll('p');
            pElementsLight.forEach(p => {
                p.style.color = '#000000';
            });

            logoImage.src = "../chamber/images/logo2.webp";
        }

        // Toggle button text content and set the text color to white for 'LIGHT'
        darkmode.textContent = darkmode.textContent === 'DARK' ? 'LIGHT' : 'DARK';
        darkmode.style.color = darkmode.textContent === 'LIGHT' ? 'white' : 'black';
    });

    // Taggle initialization
    const taggleInput = document.getElementById('taggleInput');
    const taggleInstance = new Taggle(taggleInput);

    // ... (any other code you may have)
});
