const h1 = document.querySelector(".hello h1");

function handleTitleClick(){
    // const clickedClass = "clicked";
    // if(h1.classList.contains(clickedClass)){
    //     h1.classList.remove(clickedClass);
    // }else{
    //     h1.classList.add(clickedClass);
    // }
    h1.classList.toggle("clicked");//add and remove = toggle
}

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
    h1.style.color = "violet";
    h1.innerText = "You just resize!";
}

h1.addEventListener("click",handleTitleClick);
// h1.onmouseenter = handleMouseEnter;
// h1.onmouseleave = handleMouseLeave;
// window.addEventListener("contextmenu",handleConTextMenu)
// window.addEventListener("resize", handleWindowResize);