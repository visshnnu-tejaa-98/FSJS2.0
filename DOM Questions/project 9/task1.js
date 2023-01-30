// To show the broken image
let img = document.querySelectorAll("img");
img = [...img];
img[1].src = `./images/icon-cart.svg`;
console.log(img[1].src);

// Change heading color to red
let title = document.querySelector("h1");
title.style.color = "red";
