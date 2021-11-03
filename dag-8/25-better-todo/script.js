/**
 * Better todos
 */

const newTodoFormEl = document.querySelector("#new-todo-form")
const todosEl = document.querySelector("#todos");

// list of todos
const todos = [
    {
        title: "Eat",
        completed: false,
    },
    {
        title: "Sleep",
        completed: false,
    },
    {
        title: "Code",
        completed: false,
    },
    {
        title: "Drink Coffee",
        completed: false,
    }
];

const renderTodos = () => {
    // empty UL of todos
    todosEl.innerHTML = "";
    
    // render todos to DOM
    todos.forEach((todo, i) => {
        console.log(`Todo at index ${i} is: ${todo.title}`);
        if (todo.completed === true) {
            todosEl.innerHTML += `<li class="list-group-item completed" data-index="${i}">
            ${todo.title}<button class="ms-2">🗑</button></li>`;
        } else {
            todosEl.innerHTML += `<li class="list-group-item" data-index="${i}">
            ${todo.title}<button class="ms-2">🗑</button></li>`;
        } 
    });
}

renderTodos(); 

newTodoFormEl.addEventListener('submit', e => {
    // stop form from being submitted to web server and hence causinga page reload
    e.preventDefault();

    // get todo to add new object to array
    todos.push({"title": e.target.newTodo.value, "completed": false});

    // empty input
    e.target.newTodo.value = "";

    //render todos
    renderTodos();
});

newTodoFormEl.addEventListener('reset', e => {
    // oh no u reset form
    // e.preventDefault();
    alert("gOOD job cleaning");
});

todosEl.addEventListener('click', e => {
    // check if user clicked on a LI element
    if (e.target.tagName === "LI") {
        // deklarera variabeln index för att veta vilken li som blev klickad
        const index = e.target.dataset.index;
        // kolla om property "completed" är false
        if (todos[index].completed === false) {
            // om "completed" är false, ändra "completed" till true, klassen "completed" läggs på den klickade li:n
            todos[index].completed = true;
            // rendera ut ny todo-lista med klassen "completed" på den li som blev klickad
            renderTodos();
        } // kolla annars om property "completed" är true
        else if (todos[index].completed === true) {
            // isåfall, sätt "completed" till false, klassen "completed" tas bort från klickade li:n
            todos[index].completed = false;
            // rendera ut ny todo-lista utan klassen "completed"
            renderTodos();
        }
    } 
    else if (e.target.tagName === "BUTTON") {
        //remove list item from list and array
        const buttonEl = e.target;
        const liEl = buttonEl.parentElement;
        const index = liEl.dataset.index; //data-index =""

        // shorter version of above 3 lines
        // const index = e.target.parentElement.dataset.index;

        //remove item with index from array
        todos.splice(index, 1);

        // render todos
        renderTodos();
      }
});