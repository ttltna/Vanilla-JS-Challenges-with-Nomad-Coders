const toDoForm = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input"); //way 1
const toDoInput = toDoForm.querySelector("input"); //way 2
const toDoList = document.getElementById("todo-list");
const TODES_KEY = "todos"

let toDos = [];

function saveToDos(){
    // localStorage.setItem(TODES_KEY,toDos);
    localStorage.setItem(TODES_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    console.log(li.id);
    li.remove();
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();

}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODES_KEY);
console.log(savedToDos);

if(savedToDos !== null){
    const paresedToDos = JSON.parse(savedToDos);
    toDos = paresedToDos;
    console.log(paresedToDos);
    paresedToDos.forEach(paintToDo);
}