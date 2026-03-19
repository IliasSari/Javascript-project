let counter = 0;
const myNewButton = document.createElement("button");

myNewButton.innerText = "Press(Made with JS!)";
myNewButton.style.padding = "13px";
myNewButton.style.fontSize = "13px";
myNewButton.style.cursor = "pointer";
document.body.appendChild(myNewButton);

function randomColor(){
    let r = Math.floor(Math.random()* 256);
    let g = Math.floor(Math.random()* 256);
    let b = Math.floor(Math.random()* 256);
    return `rgb(${r}, ${g}, ${b})`;
}

myNewButton.addEventListener("click", function() {
    const newColor = randomColor();
    counter = counter + 1;
    myNewButton.innerText = "Clicks: " + counter;

    if (counter === 10){
        myNewButton.style.backgroundColor = "red";
        myNewButton.innerText = "10!!!";
    }

    document.body.style.backgroundColor = newColor;
    console.log("New color is: "+ newColor);    
});


document.body.appendChild(myNewButton);