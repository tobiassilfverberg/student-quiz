/**
 * DOM - Document Object Model 2
 */

const listitemsEl = document.querySelector("ul");
const listitems = document.querySelectorAll("li");
const addButton = document.querySelector("#add");

// for each list item, add a event-listener for click-events

listitemsEl.addEventListener("click", (e) => {
  console.log("You clicked on a LI", e.target);
  e.target.style.color = "green";
});

addButton.addEventListener("click", () => {
  const newListItem = document.createElement("li");
});
