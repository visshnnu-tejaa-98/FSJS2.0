// To display the nav links in small screen window. when we click on hamburger
let hamburger = document.querySelector(".navbar-toggler");
console.log(hamburger);
hamburger.addEventListener("click", () => {
  let action = document.querySelector(".collapse");
  action.style.display = "block";
});
