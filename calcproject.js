let numberone;
let numbertwo;
let operator;
let numberGrid = document.querySelectorAll('.numberbutton');
let displayText = document.querySelector('#displayText');

console.log(displayText)

numberGrid.forEach(button => button.addEventListener("click", (e) =>{
    let value = parseInt(e.target.value);
    displayText.textContent += value;
    console.log(value);
}));





function operate(num1,ops,num2) {
    add();
    subtract();
    multiply();
    divide();
}

function add() {
    console.log("Add")
}
function subtract() {
    console.log("Subtract")
}
function multiply() {
    console.log("Multiply")
}
function divide() {
    console.log("Divide")
}

operate(numberone,operator,numbertwo);