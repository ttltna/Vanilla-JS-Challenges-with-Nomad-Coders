const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form");
const greetings = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // string만 포함된 변수는 대문자로 표기하는 컨벤션
const USERNAME_KEY = "username"

function onLoginSubmit(event){
    // console.dir(loginInput);
    // console.log(loginInput.value);
    // const userName = loginInput.value;
    // if(userName === ""){
    //     alert("Please write your name");
    // }else if(userName.length > 15){
    //     alert("Your name is too long");
    // }else{
    //     console.log(userName);
    // }
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY,userName);
    paintGreeting(userName);
}

function paintGreeting(username){
    greetings.innerText = `Hello ${username}`;
    greetings.classList.remove(HIDDEN_CLASSNAME);
}

// loginButton.addEventListener("click",handleLoginBtnClick);
loginForm.addEventListener("submit",onLoginSubmit);

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    //show the greetings
    paintGreeting(savedUserName);
}