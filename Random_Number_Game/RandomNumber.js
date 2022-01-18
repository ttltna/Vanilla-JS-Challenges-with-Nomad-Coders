const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handleLoginBtnClick(){
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
    const userName = loginInput.value;
    console.log(userName);
}

loginButton.addEventListener("click",handleLoginBtnClick);