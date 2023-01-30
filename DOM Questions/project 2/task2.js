// Add Skills Accordian in to accordian List
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
