const toDoForm = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input"); //way 1
const toDoInput = toDoForm.querySelector("input"); //way 2
const toDoList = document.getElementById("todo-list");

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteToDo);
    const li = document.createElement("li");
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);

}

toDoForm.addEventListener("submit",handleToDoSubmit);