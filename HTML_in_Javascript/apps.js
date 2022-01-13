const h1 = document.querySelector(".hello h1");

// function handleTitleClick(){
//     const currentColor = h1.style.color;
//     let newColor;
//     // console.log(h1.style.color);
//     // h1.style.color = "blue";
//     // console.log(h1.style.color);
//     if(currentColor === "tomato"){
//         newColor = "blue";
//     }else if(currentColor === "blue"){
//         newColor = "tomato";
//     }else{
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// }

function handleMouseEnter(){
    h1.style.color = "green";
    h1.innerText = "Mouse is Here!";
}

function handleMouseLeave(){
    h1.style.color = "blue";
    h1.innerText = "Mouse is gone!";
}

function handleConTextMenu(){
    h1.style.color = "orange";
    h1.innerText = "That was a rightclick!"
}

function handleWindowResize(){
    // document.body.style.background = "violet";
    h1.style.color = "violet";
    h1.innerText = "You just resize!";
}

// h1.addEventListener("click",handleTitleClick);
// h1.onclick = handleTitleClick;

// h1.addEventListener("mouseenter",handleMouseEnter);
h1.onmouseenter = handleMouseEnter;
// h1.addEventListener("mouseleave",handleMouseLeave);
h1.onmouseleave = handleMouseLeave;

// h1.oncontextmenu = handleConTextMenu;
window.addEventListener("contextmenu",handleConTextMenu)

window.addEventListener("resize", handleWindowResize);