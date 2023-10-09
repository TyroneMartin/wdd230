document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const sidebarMenu = document.getElementById("sidebar-menu");
    const overlay = document.querySelector(".overlay");
    const menuVisible = false;

    hamburgerMenu.addEventListener("click", function () {
        if (!menuVisible) {
            sidebarMenu.style.visibility = "visible";
            sidebarMenu.style.left = "0";
            overlay.style.visibility = "visible";
            overlay.style.opacity = "0.4";
        } else {
            sidebarMenu.style.visibility = "hidden";
            sidebarMenu.style.left = "-250px";
            overlay.style.visibility = "hidden";
            overlay.style.opacity = "0";
        }
    });
});
