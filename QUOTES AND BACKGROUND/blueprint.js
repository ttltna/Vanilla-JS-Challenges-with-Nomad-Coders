const button = document.querySelector("button#backColor");
const colors = ["blue", "yellow","violet","hotpink","skyblue","aqua","royalblue","gold","greenyellow","tomato"];

function handleOnClick(){
    const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
    const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
    const bgColor = document.createElement("div");
    bgColor.className = "linear_color";
    bgColor.style = `background: linear-gradient(0.25turn, ${randomColor1}, ${randomColor2});`
    document.body.appendChild(bgColor);
}

button.addEventListener("click",handleOnClick);