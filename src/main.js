let adviceNumber = document.querySelector(".card-heading p");
let advice = document.querySelector(".card-text p");
let dice = document.querySelector(".dice-icon-container");
let divideIcon = document.querySelector(".icon-divide img");
let deg = 1080;

generateQuote();

dice.children[0].style.transform = `rotate(0deg)`;

if (window.innerWidth <= 580) {
    divideIcon.src = "/assets/pattern-divider-mobile.svg";
} else {
    divideIcon.src = "/assets/pattern-divider-desktop.svg";
}

function generateQuote() {
    fetch("https://api.adviceslip.com/advice")
        .then((res) => res.json())
        .then((data) => {
            adviceNumber.innerHTML = `ADVICE # ${data.slip.id}`;
            advice.innerHTML = `“${data.slip.advice}”`;
        });
}

dice.addEventListener("click", () => {
    dice.children[0].style.transform = `rotate(${deg}deg)`;
    deg += 1080;
    generateQuote();
});
