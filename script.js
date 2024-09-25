const featuresDropdownLink = document.getElementById("features-dropdown-link");
const featuresDropdownMenu = document.getElementById("features-dropdown-menu");
const companyDropdownLink = document.getElementById("company-dropdown-link");
const companyDropdownMenu = document.getElementById("company-dropdown-menu");
const dropdownArrow = document.querySelector(".dropdown-arrow");

featuresDropdownLink.addEventListener("click", function () {
  featuresDropdownMenu.classList.toggle("hidden");
  featuresDropdownMenu.classList.toggle("active");
});

companyDropdownLink.addEventListener("click", function () {
  companyDropdownMenu.classList.toggle("hidden");
  companyDropdownMenu.classList.toggle("active");
});
