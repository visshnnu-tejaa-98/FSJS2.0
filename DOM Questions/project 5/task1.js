// Add chinese(7) to side panel
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
