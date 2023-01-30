# Project 9

## Task 1

1. To show the broken image
2. Change heading color to red

![Alt text](./assets/ass9.1-after.png)

Code:

```javascript
// To show the broken image
let img = document.querySelectorAll("img");
img = [...img];
img[1].src = `./images/icon-cart.svg`;
console.log(img[1].src);

// Change heading color to red
let title = document.querySelector("h1");
title.style.color = "red";
```

## Task 2

Change the color and background of the button when we hover on it

![Alt text](./assets/ass9.2-after.png)

Code:

```javascript
const box = document.querySelector(".add-to-cart");

box.addEventListener("mouseover", function handleMouseOver() {
  box.style.background = "red";
  box.style.color = "#fff";
});

box.addEventListener("mouseout", function handleMouseOut() {
  box.style.background = "hsl(158, 36%, 37%)";
  box.style.color = "#fff";
});
```
