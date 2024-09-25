// Open/Close Mobile Menu
const openNav = document.getElementById("open");
const closeNav = document.getElementById("close");
const navMenu = document.getElementById("nav-menu");

openNav.addEventListener("click", function () {
  navMenu.classList.add("active");
});

closeNav.addEventListener("click", function () {
  navMenu.classList.remove("active");
});

// Dropdown Menu Functionality
const dropdownLink = document.querySelectorAll(".dropdown-nav-item");

dropdownLink.forEach((link) => {
  link.addEventListener("click", function () {
    const dropdownMenu = link.querySelector(".dropdown-menu");
    dropdownMenu.classList.toggle("active");
    dropdownMenu.classList.toggle("hidden");

    const dropdownArrow = link.querySelector(".dropdown-arrow");
    dropdownArrow.classList.toggle("active");
  });
});
