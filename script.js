// ─── Product Color Image Switcher ─────────────────

const circles = document.querySelectorAll(".circle");
const productImage = document.getElementById("productImage");

circles.forEach(circle => {
  circle.addEventListener("click", () => {
    // Remove active from all
    circles.forEach(c => c.classList.remove("active"));

    // Add active to clicked
    circle.classList.add("active");

    // Get color
    const color = circle.dataset.color;

    // Change image
    productImage.src = `${color}.png`;
  });
});
