const h1 = document.querySelector(".hello h1");

// function handleTitleClick(){
//     h1.style.color = "blue";
// }

function handleMouseEnter(){
    h1.style.color = "green";
    h1.innerText = "Mouse is Here!";
}

function handleMouseLeave(){
    h1.style.color = "blue";
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize(){
    // document.body.style.background = "violet";
    h1.style.color = "violet";
    h1.innerText = "You just resize!";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("All Good!!");
}

// h1.addEventListener("click",handleTitleClick);
// h1.onclick = handleTitleClick;

// h1.addEventListener("mouseenter",handleMouseEnter);
h1.onmouseenter = handleMouseEnter;
// h1.addEventListener("mouseleave",handleMouseLeave);
h1.onmouseleave = handleMouseLeave;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);