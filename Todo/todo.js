const toDoForm = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input"); //way 1
const toDoInput = toDoForm.querySelector("input"); //way 2
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
}

toDoForm.addEventListener("submit",handleToDoSubmit);