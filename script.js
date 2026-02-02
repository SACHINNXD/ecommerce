// ─── Product Color Image Switcher (Optimized) ─────────────────

const circles = document.querySelectorAll(".circle");
const productImage = document.getElementById("productImage");

const colors = ["blue", "orange", "green", "red", "cyan"];
const imageCache = {};

// Preload images
colors.forEach(color => {
  const img = new Image();
  img.src = `${color}.png`;
  imageCache[color] = img;
});

// Instant switch on click
circles.forEach(circle => {
  circle.addEventListener("click", () => {
    circles.forEach(c => c.classList.remove("active"));
    circle.classList.add("active");

    const color = circle.dataset.color;
    productImage.src = imageCache[color].src;
  });
});
