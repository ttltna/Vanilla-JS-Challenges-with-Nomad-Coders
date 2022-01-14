const div = document.querySelector(".hello");

// function handleTitleClick(){
    // const clickedClass = "clicked";
    // if(h1.classList.contains(clickedClass)){
    //     h1.classList.remove(clickedClass);
    // }else{
    //     h1.classList.add(clickedClass);
    // }
//     h1.classList.toggle("clicked");//add and remove = toggle
// }

// function handleMouseEnter(){
//     h1.style.color = "green";
//     h1.innerText = "Mouse is Here!";
// }

// function handleMouseLeave(){
//     h1.style.color = "blue";
//     h1.innerText = "Mouse is gone!";
// }

// function handleConTextMenu(){
//     h1.style.color = "orange";
//     h1.innerText = "That was a rightclick!"
// }

function handleWindowResize(){
    const browserwidth = window.innerWidth;
    if(browserwidth >= 1300){
        document.body.style.backgroundColor = "orange";
    }else if(browserwidth < 1300 && browserwidth >= 700){
        document.body.style.backgroundColor = "violet";
    }else{
        document.body.style.backgroundColor = "blue";
    }
    // h1.style.color = "violet";
    // h1.innerText = "You just resize!";
}

// h1.addEventListener("click",handleTitleClick);
// h1.onmouseenter = handleMouseEnter;
// h1.onmouseleave = handleMouseLeave;
// window.addEventListener("contextmenu",handleConTextMenu)
// window.addEventListener("resize", handleWindowResize);

window.addEventListener("resize",handleWindowResize);