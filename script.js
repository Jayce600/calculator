
let screen = document.querySelector(".s2");
let topScreen = document.querySelector(".s1");
let buttons = document.querySelectorAll(".button");
let operations = document.querySelectorAll(".operations");
let equals = document.querySelector(".equals");
let clear = document.querySelector(".clr");

let totalDiv = document.createElement("p");
topScreen.appendChild(totalDiv);

let firstNumber = undefined;
let secondNumber = undefined;
let total = 0;
let decimal = false;
let operator = "";

initialize();

function initialize(){
    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", addToScreen);
        console.log(buttons[i].getAttribute("value"));
    }
    for (let i = 0; i < operations.length; i++){
        operations[i].addEventListener("click", operation);
        console.log(operations[i].getAttribute("value"));
    }
    equals.addEventListener("click", compute);
    clear.addEventListener("click", clearScreen);
}

function addToScreen(e){
    let input = document.createElement("p");
    input.textContent = e.srcElement.getAttribute("value");
    screen.appendChild(input);
    if (firstNumber == undefined){
        firstNumber = e.srcElement.getAttribute("value");
    } else if (secondNumber == undefined){
        secondNumber = e.srcElement.getAttribute("value");
    }
}

function operation(e){
    //add string to screen
    let input = document.createElement("p");
    input.textContent = e.srcElement.getAttribute("value");
    screen.appendChild(input);
    
    // set operator variable
    operator = e.srcElement.getAttribute("value");
}

function compute(){
    let answer;
    switch (operator){
        case "/":
            answer = parseInt(firstNumber) / parseInt(secondNumber);
            break;
        case "*":
            answer = parseInt(firstNumber) * parseInt(secondNumber);
            break;
        case "+":
            answer = parseInt(firstNumber) + parseInt(secondNumber);
            break;
        case "-":
            answer = parseInt(firstNumber) - parseInt(secondNumber);
            break;    
    }
    totalScreen(answer);
}

function clearScreen(){
    while (screen.firstChild) {
        screen.removeChild(screen.firstChild);
    }
    while (topScreen.firstChild) {
        topScreen.removeChild(topScreen.firstChild);
    }
    totalDiv = document.createElement("p");
    topScreen.appendChild(totalDiv);
    
    firstNumber = undefined;
    secondNumber = undefined;
    total = 0;
    operator = "";

}

function totalScreen(answer){
    while (screen.firstChild) {
        screen.removeChild(screen.firstChild);
    }
    firstNumber = undefined;
    secondNumber = undefined;
    operator = "";

    total += parseInt(answer);
    totalDiv.textContent = total;
}


