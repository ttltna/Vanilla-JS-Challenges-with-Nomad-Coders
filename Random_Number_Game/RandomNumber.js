const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form");
const loginUserName = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // string만 포함된 변수는 대문자로 표기하는 컨벤션

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
    loginForm.classList.add("hidden");
    const userName = loginInput.value;
    console.log(userName);
    loginUserName.classList.remove("hidden");
    loginUserName.innerText = "Hello " + userName;
}

// loginButton.addEventListener("click",handleLoginBtnClick);
loginForm.addEventListener("submit",onLoginSubmit)