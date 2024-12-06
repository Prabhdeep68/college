document.addEventListener("DOMContentLoaded", function () {
    var menuIcon = document.querySelector(".menu-icon");
    var navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        
        // Toggle between hamburger and cross icon
        if (menuIcon.classList.contains("open")) {
            menuIcon.classList.remove("open");
            menuIcon.innerHTML = '<i class="fas fa-bars"></i>'; // Hamburger icon
        } else {
            menuIcon.classList.add("open");
            menuIcon.innerHTML = '<i class="fas fa-times"></i>'; // Cross icon
        }
    });
});