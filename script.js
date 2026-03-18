const title = document.getElementById("title");
const button = document.getElementById("myButton");

button.addEventListener("click", function() {
    title.innerText = "Button pressed! 🎉";
    title.style.color = "blue";
});

title.addEventListener("mouseover", function() {
    title.style.fontSize = "50px";
    title.style.transition = "0.5s"; 
});

title.addEventListener("mouseout", function() {
    title.style.fontSize = "32px";
    title.style.color = "black";
});