const clock = document.querySelector("h2#clock");

function getClock(){
    const fromNow = new Date();
    let nowTime = fromNow.getTime();
    // const nowDay = fromNow.getDay();
    // const nowHours = fromNow.getHours();
    // const nowMinutes = fromNow.getMinutes();
    // const nowSeconds = fromNow.getSeconds();
    // const nowHours = String(fromNow.getHours()).padStart(2,"0");
    // const nowMinutes = String(fromNow.getMinutes()).padStart(2,"0");
    // const nowSeconds = String(fromNow.getSeconds()).padStart(2,"0");
    
    const christmas = new Date("December 25, 2022 00:00:00");
    let christmasTime = christmas.getTime();
    // const chrismasDay = christmas.getDay();
    // const chrismasHours = christmas.getHours();
    // const chrismasMinutes = christmas.getMinutes();
    // const chrismasSeconds = christmas.getSeconds();
    // clock.innerText = `${hours}:${minutes}:${seconds}`;
    // console.log(`${(chrismasDay-nowDay)}`);

    let dday_ms = christmasTime - nowTime;

    let dday = Math.ceil(dday_ms / (1000 * 60 * 60 * 24));
    let dhour = Math.ceil((dday_ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let dmin = Math.ceil((dday_ms % (1000 * 60 * 60)) / (1000 * 60));
    let dsec = Math.ceil((dday_ms % (1000 * 60)) / 1000);

    dhour = String(dhour).padStart(2, "0");
    dmin = String(dmin).padStart(2, "0");
    dsec = String(dsec).padStart(2, "0");

    // console.log(`nowTime = ${nowTime}, christmasTime = ${christmasTime}`);
    // console.log(`남은 시간 : ${dday_ms}`);
    // console.log("D-DAY까지 " + dday + "일 " + dhour + "시간 " + dmin + "분 " + dsec + "초 남았습니다.");
    clock.innerText = `${dday}d ${dhour}h ${dmin}m ${dsec}s`;
}

getClock();
setInterval(getClock, 1000);
// setTimeout(getClock, 1000);

//setInterval과 setTimeout의 차이점 알아오기!!