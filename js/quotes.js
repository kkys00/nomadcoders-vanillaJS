const quotes = [ //명언 객체 어레이
    {
        quote: "세상은 이화에게 물었고 이화는 그대를 답했다",
        author: "이화여자대학교"
    },
    {
        quote: "편지를 한 장 쓸 때마다 두 번 세 번 읽어보면서 이 편지가 사통오달한 번화가에 떨어져 나의 원수가 펴보더라도 내가 죄를 얻지 않을 것인가를 생각하면서 써야 하고, 또 이 편지가 수백 년 동안 전해져서 안목 있는 많은 사람들의 눈에 띄더라도 조롱받지 않을만한 편지인가를 생각해본 뒤에야 비로소 봉해야 하는데, 이것이 바로 군자가 삼가는 바다.",
        author: "정약용"
    },
    {
        quote: "공자께서는 길 한복판에서 똥 싸는 이를 나무라지 않으셨다.",
        author: "논어"
    },
    {
        quote:"덕이 있는 자는 반드시 훌륭한 말을 한다. 그러나 입으로 훌륭한 말을 하는 자가 반드시 덕이 있는 자는 아니다.",
        author: "논어"
    },
    {
        quote:"군자는 모든 일을 자기에게서 구하고 자기의 책임으로 돌린다. 소인은 모든 일을 다른 사람에게 그 책임을 떠넘긴다.",
        author: "논어"
    },
    {
        quote:"군자는 자기가 말한 것이 지나친 것을 부끄러워해야 한다. 실행하지 않는 말을 삼가고 말 이상으로 실천하도록 힘쓴다.",
        author: "논어"
    },
    {
        quote:"그 나라가 도덕이 행해지고 있는 나라라면 그 곳에서 녹(祿)을 받고 있는 것은 좋다. 그러나 도덕이 행해지지 않는 나라에서 녹을 받고 있는 것은 사람으로서 부끄러운 일이다.",
        author: "논어"
    },
    {
        quote:"나는 농사일은 늙은 농부만 못하다. 농사일은 나보다는 늙은 농부에게 듣는 것이 좋다. 사람에게는 제각기 본분이 있는 법이다.",
        author: "논어"
    },
    {
        quote:"남을 대할 때 자기를 남이 속일 것이라고 미리 방비하지 말고 신용을 지키지 않을 것이라고 억측하지 마라.",
        author: "논어"
    },
    {
        quote:"느슨하고 불충분한 명령을 내리면서 그 성과의 시기를 엄하게 하고 그 수행을 독촉한다. 이렇게 하는 것은 사람을 손상시키는 짓으로 적(賊)이라 말할 수 있다.",
        author: "논어"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
