const newTodoFormEl = document.querySelector("#new-todo-form")
const todosEl = document.querySelector("#todos");

newTodoFormEl.addEventListener('submit', e => {
    //stop form from being submitted to web server and hence causinga page reload
    e.preventDefault();

    //get todo to add to list of todos
    const newTodo = e.target.newTodo.value;

    // empty input
    e.target.newTodo.value = "";

    //add todo to list of todos
    todosEl.innerHTML += `<li class="list-group-item">${newTodo}<button class="ms-2">🗑</button></li>`;
});

newTodoFormEl.addEventListener('reset', e => {
    //oh no u reset form
    // e.preventDefault();
    alert("gOOD job cleaning");
});

todosEl.addEventListener('click', e => {
    //check if user clicked on a LI element
    if (e.target.tagName === "LI") {
        //toggle class completed on/off on Li
        e.target.classList.toggle("completed");
    } else if (e.target.tagName === "BUTTON") {
        //remove list item
        e.target.parentElement.remove();
      }
});