const title = document.querySelector(".hello h1");

function handleTitleClick(){
    title.style.color= "blue";
}

function handleMouseEnter(){
    title.style.color= "green";
    title.innerText = "Mouse is Here!"
}

function handleMouseLeave(){
    title.style.color= "red";
    title.innerText = "Mouse is gone!"
}

title.addEventListener("click",handleTitleClick);
title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave",handleMouseLeave);