# Project 4

## Task 1

Change the colors for the cards as shown in the output

![Alt text](./assets/DOM%20P1%20SS.png)

Code:

```javascript
let cardFooter1 = document.querySelector(".clash-card__unit-stats--barbarian");
let cardFooter2 = document.querySelector(".clash-card__unit-stats--archer");
let cardFooter3 = document.querySelector(".clash-card__unit-stats--giant");
let cardFooter4 = document.querySelector(".clash-card__unit-stats--goblin");
let cardFooter5 = document.querySelector(".clash-card__unit-stats--wizard");
let stats = document.querySelectorAll(".stat");

cardFooter1.style.backgroundColor = "#EC9B3B";
cardFooter2.style.backgroundColor = "#EE5487";
cardFooter3.style.backgroundColor = "#F6901A";
cardFooter4.style.backgroundColor = "#82BB30";
cardFooter5.style.backgroundColor = "#4FACFF";
stats = [...stats];
stats.map((item) => (item.style.color = "#FCFFFF"));
```
