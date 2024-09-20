const featuresDropdownMenu = document.querySelector(".features-menu");
const featuresDropdownLink = document.getElementById("features-dropdown-link");
const dropdownArrow = document.querySelector(".dropdown-arrow");

featuresDropdownLink.addEventListener("click", function () {
  featuresDropdownMenu.classList.toggle("active");
  featuresDropdownMenu.classList.toggle("hidden");

  featuresDropdownMenu.classList.contains("active")
    ? (dropdownArrow.src = "images/icon-arrow-up.svg")
    : (dropdownArrow.src = "images/icon-arrow-down.svg");
});
