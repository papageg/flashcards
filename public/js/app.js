

// select your hint and store it in a variable
const hint = document.querySelector('.hint');

//create a button
const hintShowButton = document.createElement('BUTTON');
hintShowButton.classList.add("buttonA");
//create text inside button
var hintText = document.createTextNode("Show Hint");

//put text inside button
hintShowButton.appendChild(hintText);

//Insert button to page 
//document.body.appendChild(hintShowButton);
document.getElementById("content").appendChild(hintShowButton);
//Set hints display to none
hint.style.display = "none";

//Create Eventlistener for the button 
//When clicked change display to none and show hint. 
const buttonClick = document.querySelector('.buttonA');
buttonClick.addEventListener("click", buttonFun);

function buttonFun () {
    hint.style.display = "block";
    hintShowButton.style.display = 'none';
};

