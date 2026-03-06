let numberone = {count: []};
let numbertwo = {count: []};
let runningtotal = {count: []};
let operator;
let numberGrid = document.querySelectorAll('.numberbutton');
let funcGrid = document.querySelectorAll('.funcbutton');
let displayText = document.querySelector('#displayText');
let plus = 0;
let subt = 0;
let mult = 0;
let divi = 0;

let activenumber = numberone;

console.log(activenumber.count);


numberGrid.forEach(button => button.addEventListener("click", (e) =>{
    
    if(numberone.count > 0 && numbertwo.count > 0 && operator.length > 0){
        check();
    } else {
        let value = parseInt(e.target.value);
        activenumber.count += value;
        displayText.textContent += value;
    }

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
    
}


function operate(num1,ops,num2) {
    
    if(ops === "+"){
        plus = add(num1, num2);
        displayText.textContent = "";
        displayText.textContent = plus;
    } else if(ops === "-"){
        subt = subtract(num1, num2);
        displayText.textContent = "";
        displayText.textContent = subt;
    } else if(ops === "*"){
        mult = multiply(num1, num2);
        displayText.textContent = "";
        displayText.textContent = mult;
    } else if(ops === "/"){
        divi = divide(num1, num2);
        displayText.textContent = "";
        displayText.textContent = divi;
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
