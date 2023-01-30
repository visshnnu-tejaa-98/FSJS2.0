# Project 2

## Task 1

Change the color of accordian header

![Alt text](./assets/task1Output.png)

Code:

```javascript
let h3s = document.querySelectorAll("h3");
h3s = [...h3s];
h3s.map((h3) => (h3.style.backgroundColor = "#dadaf8"));
```

## Task 2

Add Skills Accordian in to accordian List

![Alt text](./assets/task2Output.png)

Code:

```javascript
let h3s = document.querySelectorAll("h3");
h3s = [...h3s];
h3s.map((h3) => (h3.style.backgroundColor = "#dadaf8"));

let wrapper = document.querySelector(".accordian-wrapper");
let acc = document.createElement("div");
acc.setAttribute("class", "accordian");
acc.innerHTML = `<h3>Skills</h3>
        <p style="display: block;">
          I posses a very good command over the full stack development
          technologies like MERN Stack which can be seen in my work over the
          Github
        </p>`;
wrapper.append(acc);
```
