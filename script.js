let counter = 0;
const htmlButton = document.getElementById("myButton");
const title = document.getElementById("title");

const colorBtn = document.createElement("button");
colorBtn.innerText = "Random color";
document.body.appendChild(colorBtn);

const counterBtn = document.createElement("button");
counterBtn.innerText = "Clicks: 0";
document.body.appendChild(counterBtn);

const resetBtn = document.createElement("button");
resetBtn.innerText = "Reset";
document.body.appendChild(resetBtn);

const buttons = [colorBtn, counterBtn, resetBtn];
buttons.forEach(btn => {
    btn.style.display = "block";
    btn.style.margin = "10px 0";
    btn.style.padding = "10px";
    btn.style.cursor = "pointer";
});
counterBtn.style.backgroundColor = "orange";

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

htmlButton.addEventListener("click", function() {
    title.style.color = randomColor();
});

colorBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = randomColor();
});

counterBtn.addEventListener("click", function() {
    counter++;
    counterBtn.innerText = "Clicks: " + counter;
    if (counter >= 10) {
        counterBtn.style.backgroundColor = "red";
    }
});

resetBtn.addEventListener("click", function() {
    counter = 0;
    counterBtn.innerText = "Clicks: 0";
    counterBtn.style.backgroundColor = "orange";
    document.body.style.backgroundColor = "white";
    title.style.color = "black";
});