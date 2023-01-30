# Project 8

## Task 1

Add anoter row inside the right side panel and implement scroll

![Alt text](./assets/ass8.1-after.png)

Code:

```javascript
let div = document.querySelector(".new");
let hr = document.createElement("hr");
let h2 = document.createElement("h2");
let p = document.createElement("p");

hr.setAttribute("class", "hr-line");
h2.setAttribute("class", "new-head");
p.setAttribute("class", "new-p");

h2.innerText = "This is my Custom Heading";
p.innerText = "Will hydrogen-fueled cars ever catch up to EVs?";

div.append(hr);
div.append(h2);
div.append(p);

let cont = document.querySelector("aside");
cont.style.overflow = "auto";
```

## Task 2

Remove Background

![Alt text](./assets/ass8.2-after.png)

Code:

```javascript
let body = document.querySelector("body");
body.style.background = "none";
```

## Task 3

To display the nav links in small screen window. when we click on hamburger

![Alt text](./assets/ass8.3-after.png)

Code:

```javascript
let hamburger = document.querySelector(".navbar-toggler");
console.log(hamburger);
hamburger.addEventListener("click", () => {
  let action = document.querySelector(".collapse");
  action.style.display = "block";
});
```
