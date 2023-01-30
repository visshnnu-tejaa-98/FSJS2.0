# Project 5

## Task 1

Add chinese(7) to side panel and 6th card

![Alt text](./assets/DOM%20P2%20SS.png)

Code:

```javascript
let container = document.querySelector(".tags-container");
let innerContainer = container.firstElementChild.nextElementSibling;
let a = document.createElement("a");
a.innerText = "Chinese (7)";
innerContainer.append(a);

let gallery = document.querySelector(".recipe-gallery");
let newCard = document.createElement("div");
newCard.setAttribute("class", "card");
newCard.innerHTML = "<h3>Add 6th Card Here</h3>";
gallery.append(newCard);
```
