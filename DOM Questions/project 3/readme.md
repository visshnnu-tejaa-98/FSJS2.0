# Project 3

## Task 1

Change the placeholder text in both forms

![Alt text](./assets/task1Output.png)

Code:

```javascript
let enterName = document.querySelector(".enterName");
let enterMail = document.querySelector(".enterMail");
let enterMessage = document.querySelector(".enterMessage");
enterName.setAttribute("placeholder", "FSJS 2.0");
enterMail.setAttribute("placeholder", "fsjs@ineuron.ai");
enterMessage.setAttribute("placeholder", "Hello World");

let userName = document.querySelector(".userName");
let userMail = document.querySelector(".userEmail");
let userMessage = document.querySelector(".userMessage");
userName.setAttribute("placeholder", "FSJS 2.0");
userMail.setAttribute("placeholder", "fsjs@ineuron.ai");
userMessage.setAttribute("placeholder", "Hello World");
```
