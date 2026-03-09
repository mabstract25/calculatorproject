let numberone = {count: 0};
let numbertwo = {count: 0};
let runningtotal = {count: 0};
let operator = "";
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
    
    if(numberone.count > 0 && numbertwo.count > 0 && operator.length > 0){
        check();
    } else {
        let value = e.target.value;
        operator = value;
        displayText.textContent += " " + value + " ";
        activenumber = numbertwo;
    }

} ));


function check() { 
    operate(parseInt(numberone.count),operator,parseInt(numbertwo.count));
    equalCalc();
    console.log("number one is " + numberone.count);
    console.log("number two is " + numbertwo.count);
    console.log("running total is " + runningtotal.count);
    console.log("the active number is " + activenumber)
}


function operate(num1,ops,num2) {
    
    if(ops === "+"){
        runningtotal.count += add(num1, num2);
        displayText.textContent = "";
        displayText.textContent = runningtotal.count;
    } else if(ops === "-"){
        runningtotal.count += subtract(num1, num2);
        displayText.textContent = "";
        displayText.textContent = runningtotal.count;
    } else if(ops === "*"){
        runningtotal.count += multiply(num1, num2);
        displayText.textContent = "";
        displayText.textContent = runningtotal.count;
    } else if(ops === "/"){
        runningtotal.count += divide(num1, num2);
        displayText.textContent = "";
        displayText.textContent = runningtotal.count;
    } else{};
    
    
    
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

function equalCalc() {
    numberone.count = runningtotal.count;
    numbertwo = {count: 0};
    operator = "";
    
}

function clearValues() {
    numberone = {count: []};
    numbertwo = {count: []};
    operator = "";
}