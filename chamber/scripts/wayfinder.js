document.addEventListener("DOMContentLoaded", function () {
    const navigation = document.getElementById("navigation-menu");

    // Check if navigation is found and it has child elements
    if (navigation && navigation.children) {
        const currentPage = window.location.pathname;

        // Loop through each navigation link and check if it matches the current page
        Array.from(navigation.children).forEach((listItem) => {
            const link = listItem.querySelector("a");
            if (link && link.getAttribute("href") === currentPage) {
                listItem.classList.add("active"); // Add a class to highlight the active tab
            }
        });
    }
});
