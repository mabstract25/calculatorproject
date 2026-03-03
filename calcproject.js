let numberone = [];
let numbertwo = [];
let operator;
let numberGrid = document.querySelectorAll('.numberbutton');
let funcGrid = document.querySelectorAll('.funcbutton');
let displayText = document.querySelector('#displayText');

let activenumber = numberone;




numberGrid.forEach(button => button.addEventListener("click", (e) =>{
    let value = parseInt(e.target.value);
    activenumber += value;
    displayText.textContent += value;
    
}));


funcGrid.forEach(button => button.addEventListener("click", (e) =>{
    numberone.push(activenumber);
    let value = e.target.value;
    operator = value;
    
    displayText.textContent += value;
    activenumber = numbertwo;
} ));


function check() {
    numbertwo.push(activenumber);
    
    
}


function operate(num1,ops,num2) {
    add();
    subtract();
    multiply();
    divide();
}

function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}

operate(numberone,operator,numbertwo);