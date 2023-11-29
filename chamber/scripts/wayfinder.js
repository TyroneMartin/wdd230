document.addEventListener("DOMContentLoaded", function () {
    const currentPagePath = window.location.pathname;
    const navLinks = document.querySelectorAll('#navigation-menu a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPagePath === linkPath) {
            link.parentElement.classList.add('active');
        }
    });
});
