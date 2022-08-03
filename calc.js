let firstOperand = '';
let secondOperand = '';
let currentOp = null;

const numBtn = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operator]');
const equalBtn = document.getElementById('equalsBtn');
const clearBtn = document.getElementById('clearBtn');
const delBtn = document.getElementById('delBtn');
const dotBtn = document.getElementById('dotBtn');
const plusMinusBtn = document.getElementById('plusMinusBtn');
const lastScreen = document.getElementById('lastScreen');
const currentScreen = document.getElementById('currentScreen');

clearBtn.addEventListener('click', clearScreen);
delBtn.addEventListener('click', deleteNum);
dotBtn.addEventListener('click', appendDot);
plusMinusBtn.addEventListener('click', plusMinus);
equalBtn.addEventListener('click', evaluate);
numBtn.forEach((button) =>
    button.addEventListener('click', () => appendNum(button.textContent))
);
operatorBtn.forEach((button) =>
    button.addEventListener('click', () => chooseOperator(button.textContent))
);

function appendNum(num) {
    if (currentScreen.textContent === '0') currentScreen.textContent = '';
    currentScreen.textContent += num;
}

function appendDot() {
    if (currentScreen.textContent.includes('.')) return;
    currentScreen.textContent += '.';
}

function clearScreen() {
    currentScreen.textContent = '0';
    lastScreen.textContent = '';
}

function deleteNum() {
    currentScreen.textContent = currentScreen.textContent.toString().slice(0, -1);
    if (currentScreen.textContent === '') currentScreen.textContent = '0';
    if (currentScreen.textContent === '-') currentScreen.textContent = '0';
    if (currentScreen.textContent === '0') lastScreen.textContent = '';
}

function plusMinus() {
    if (currentScreen.textContent === '0') return;
    if (currentScreen.textContent.includes('-')) {
        currentScreen.textContent = currentScreen.textContent.toString().slice(1, 99);
    } else {
        currentScreen.textContent = '-' + currentScreen.textContent;
    }
}

function chooseOperator(operator) {
    if (currentOp !== null) evaluate();
    firstOperand = currentScreen.textContent;
    currentOp = operator;
    lastScreen.textContent = `${firstOperand} ${currentOp}`;
    currentScreen.textContent = '0';
}

function evaluate() {
    if (currentOp === null) return;
    if (currentOp === '÷' && currentScreen.textContent === '0') {
        alert("You can't divide by 0!");
        return;
    }
    secondOperand = currentScreen.textContent;
    currentScreen.textContent = round(operate(currentOp, firstOperand, secondOperand));
    lastScreen.textContent = `${firstOperand} ${currentOp} ${secondOperand} =`;
    currentOp = null;
}

function round(number) {
    return Math.round(number * 1000) / 1000;
}

operate();

function operate(operator, a, b) {

    console.log(a, operator, b);

    a = Number(a);
    b = Number(b);

    switch(operator) {
        case '+':
            return add(a, b)
        case '-':
            return subtract(a, b)
        case 'x':
            return multiply(a, b)
        case '÷':
            if (b === 0) return null
            return divide(a, b)
        default: 
            return null
    }

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