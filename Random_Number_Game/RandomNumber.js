const Form = document.querySelector("#input_values");
const randomInput = document.querySelector("#random_number input");
const userInput = document.querySelector("#user_number input");
const playButton = document.querySelector("#user_number button");
const result = document.querySelector("#result");
const chose = document.querySelector("#result #chose");
const wonLost = document.querySelector("#result #won_lost");


function handleSubmitEvent(event){
    event.preventDefault();
    const machineNum = Math.round(Math.random()*randomInput.value)
    localStorage.setItem("random",machineNum);
    localStorage.setItem("user",userInput.value);

    if(getRandNum !== null && getUserNum !== null){
        result.classList.remove("hidden");
    }
    chose.innerText = `You chose: ${userInput.value}, the machine chose: ${machineNum}`;
    if(machineNum == userInput.value){
        wonLost.innerText = `You won!`;
        alert("You won!");
    }else{
        wonLost.innerText = `You lost!`;
    }
}

Form.addEventListener("submit",handleSubmitEvent);

const getRandNum = localStorage.getItem("random");
const getUserNum = localStorage.getItem("user");