let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

btn1.addEventListener("click", function(){
    window.open("", "_blank");
});

btn2.addEventListener("click", function(){
    window.open("https://t.me/theontonbot/event?startapp=1a1a36df-b78e-41e5-a35b-9b4c81a8df36", "_blank");
});

btn3.addEventListener("click", function(){
    window.open("", "_blank");
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);
