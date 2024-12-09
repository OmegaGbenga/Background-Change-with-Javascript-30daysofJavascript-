var btn = document.querySelector(".btn");
var colorname = document.querySelector(".colorname");


function changeColor(){
    const colors = ["blue", "green", "purple", "orange", "grey", "plum", "violet", "indigo", "lemongreen"];
    randomColors= colors[Math.floor(Math.random()*colors.length)];
    document.body.style.backgroundColor = randomColors;
    colorname.textContent= `color: ${randomColors.charAt(0).toUpperCase()+randomColors.slice(1)}`;
}

btn.addEventListener('click', changeColor);