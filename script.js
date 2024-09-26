// Open/Close Mobile Menu
const openNav = document.getElementById("open");
const closeNav = document.getElementById("close");
const navMenu = document.getElementById("nav-menu");
const overlay = document.getElementById("overlay");

openNav.addEventListener("click", function () {
  navMenu.classList.add("active");
  overlay.classList.add("active");
});

closeNav.addEventListener("click", function () {
  navMenu.classList.remove("active");
  overlay.classList.remove("active");
});

// Dropdown Menu Functionality on Mobile
const dropdownLinks = document.querySelectorAll(".dropdown-nav-item");

dropdownLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const dropdownMenu = link.querySelector(".dropdown-menu");
    dropdownMenu.classList.toggle("active");
    dropdownMenu.classList.toggle("hidden");

    const dropdownArrow = link.querySelector(".dropdown-arrow");
    dropdownMenu.classList.contains("active")
      ? (dropdownArrow.src = "images/icon-arrow-up.svg")
      : (dropdownArrow.src = "images/icon-arrow-down.svg");
  });
});
