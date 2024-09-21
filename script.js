const heroImage = document.getElementById("hero-img");

// Change Hero image dependent on viewport size
if (window.matchMedia("(max-width: 480px)").matches) {
  heroImage.src = "images/image-hero-mobile.png";
} else {
  heroImage.src = "images/image-hero-desktop.png";
}
