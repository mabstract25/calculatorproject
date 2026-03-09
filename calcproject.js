let numberone = {count: []};
let numbertwo = {count: []};
let operator = [];
let numberGrid = document.querySelectorAll('.numberbutton');
let funcGrid = document.querySelectorAll('.funcbutton');
let displayText = document.querySelector('#displayText');
let plus = 0;
let subt = 0;
let mult = 0;
let divi = 0;

let activenumber = numberone;




numberGrid.forEach(button => button.addEventListener("click", (e) =>{
    
        let value = parseInt(e.target.value);
        activenumber.count += value;
        displayText.textContent += value;
    
    
    
}));


funcGrid.forEach(button => button.addEventListener("click", (e) =>{
    let value = e.target.value;
    if(numberone.count > 0 && numbertwo.count > 0 && operator.length > 0){
        operator[1] = value;
        check();
    } else {
        operator[0] = value;
        displayText.textContent += " " + value + " ";
        activenumber = numbertwo;
    }

} ));


function check() { 
    let checkSum = operate(parseInt(numberone.count),operator[0],parseInt(numbertwo.count));
    numberone.count = parseInt(checkSum);
    numbertwo.count = 0;
    operator.splice(0, 1);
    
}


function operate(num1,ops,num2) {
    
    if(ops === "+"){
        let optotal = add(num1, num2);
        displayText.textContent = "";
        displayText.textContent = optotal;
        return optotal;
    } else if(ops === "-"){
        let optotal = subtract(num1, num2);
        displayText.textContent = "";
        displayText.textContent = optotal;
        return optotal;
    } else if(ops === "*"){
        let optotal = multiply(num1, num2);
        displayText.textContent = "";
        displayText.textContent = optotal;
        return optotal;
    } else if(ops === "/"){
        let optotal = divide(num1, num2);
        displayText.textContent = "";
        displayText.textContent = optotal;
        return optotal;
    } else{};
    
    
    
}

function clearVal() {
    numberone.count = 0;
    numbertwo.count = 0;
    operator.splice(0, operator.length);
    console.log(numberone.count);
    console.log(numbertwo.count);
    console.log(operator);

    displayText.textContent = "";
    activenumber = numberone;
    
}

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}


