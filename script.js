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
  link.addEventListener("click", function (e) {
    e.preventDefault();
    if (window.innerWidth < 1025) {
      const dropdownMenu = link.querySelector(".dropdown-menu");

      // Hide open dropdown
      dropdownLinks.forEach((openLink) => {
        if (openLink !== link) {
          openLink.querySelector(".dropdown-menu").classList.remove("active");
          openLink.querySelector(".dropdown-arrow").src =
            "images/icon-arrow-down.svg";
        }
      });

      dropdownMenu.classList.toggle("active");

      const dropdownArrow = link.querySelector(".dropdown-arrow");
      dropdownMenu.classList.contains("active")
        ? (dropdownArrow.src = "images/icon-arrow-up.svg")
        : (dropdownArrow.src = "images/icon-arrow-down.svg");
    }
  });
});
