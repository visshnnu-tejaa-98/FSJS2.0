// Change the color and background of the button when we hover on it
const box = document.querySelector(".add-to-cart");

box.addEventListener("mouseover", function handleMouseOver() {
  box.style.background = "red";
  box.style.color = "#fff";
});

box.addEventListener("mouseout", function handleMouseOut() {
  box.style.background = "hsl(158, 36%, 37%)";
  box.style.color = "#fff";
});
