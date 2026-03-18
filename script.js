const myNewButton = document.createElement("button");

myNewButton.innerText = "Press(Made with JS!)";
myNewButton.style.padding = "20px";
myNewButton.style.fontSize = "20px";
myNewButton.style.cursor = "pointer";


function randomColor(){
    let r = Math.floor(Math.random()* 256);
    let g = Math.floor(Math.random()* 256);
    let b = Math.floor(Math.random()* 256);
    return `rgb(${r}, ${g}, ${b})`;
}

myNewButton.addEventListener("click", function() {
    const newColor = randomColor();

    document.body.style.backgroundColor = newColor;
    console.log("New color is: "+ newColor);
});
document.body.appendChild(myNewButton);