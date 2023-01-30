# Project 6

## Task 1

Change equalizer logo to ineuron LOGO

![Alt text](./assets/DOM%20P3%20SS-1.png)

Code:

```javascript
let logo = document.querySelector(".logo");
logo.setAttribute("src", "./assets/ineuron.logo.png");
```

## Task 2

Change the price to $10

![Alt text](./assets/DOM%20P3%20SS-2.png)

Code:

```javascript
let price = document.querySelector(".app_price");
price.firstElementChild.innerText = "$10";
```
