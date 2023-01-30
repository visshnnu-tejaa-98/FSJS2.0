// Remove all the tech stack which has 2.0 in it
let techStack = document.querySelectorAll("a");
techStack = [...techStack];
techStack.map((tech) =>
  tech.innerText.includes("2.0") ? (tech.style.display = "none") : null
);
