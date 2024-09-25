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
