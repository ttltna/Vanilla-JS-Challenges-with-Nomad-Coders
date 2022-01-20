const quotes = [
    {
        quote : "정의가 없는 용기는 나약하기 짝이 없다.",
        author : "벤저민 프랭클린"
    },
    {
        quote : "많은 사람이 충고를 받지만 오직 현명한 사람만이 충고의 덕을 본다.",
        author : "푸블릴리우스 시루스"
    },
    {
        quote : "침묵은 진정한 지혜에서 나오는 최고의 답이다.",
        author : "에우리피데스"
    },
    {
        quote : "가능하다고 믿는 사람은 반드시 승리한다.",
        author : "랠프 왈도 에머슨"
    },
    {
        quote : "오늘이라는 날은 두 번 다시 오지 않는다는 것을 잊지 마라.",
        author : "A.단테"
    },
    {
        quote : "인생은 짧다. 작은 일에 얽매이지 마라.",
        author : "벤저민 디즈레일리"
    },
    {
        quote : "희망은 절대 당신을 버리지 않는다. 당신이 희망을 버릴 뿐이다.",
        author : "리처드가 브리크너"
    },
    {
        quote : "분주히 움직이는 꿀벌은 슬퍼할 틈이 없다.",
        author : "윌리엄 블레이크"
    },
    {
        quote : "세상에 불가능은 없다. 단지 우리가 가능한 방법을 모를 뿐이다.",
        author : "래리슨 커드모어"
    },
    {
        quote : "모르는 것을 묻지 않는 것은 쓸데없는 오만 밖에 아무것도 아니다.",
        author : "탈무드"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;