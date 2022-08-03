let firstOperand = '';
let secondOperand = '';
let currentOp = null;


//button functionality//


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
window.addEventListener('keydown', keyboard);


//button functions//


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


//keyboard functionality//


function keyboard(e) {
    if (e.key >= 0 && e.key <= 9) appendNum(e.key);
    if (e.key === 'Backspace') deleteNum();
    if (e.key === 'Enter' || e.key === '=') evaluate();
    if (e.key === '.') appendDot();
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        chooseOperator(keyOperation(e.key));
    }
}

function keyOperation(keyOperator) {
    if (keyOperator === '+') return '+';
    if (keyOperator === '-') return '-';
    if (keyOperator === '*') return 'x';
    if (keyOperator === '/') return '÷';
}

//evaluation functions//


function evaluate() {
    if (currentOp === null) return;
    secondOperand = currentScreen.textContent;
    currentScreen.textContent = round(operate(currentOp, firstOperand, secondOperand));
    lastScreen.textContent = `${firstOperand} ${currentOp} ${secondOperand} =`;
    currentOp = null;
}

function round(number) {
    return Math.round(number * 1000) / 1000;
}

function error() {
    if (currentOp === '÷' && currentScreen.textContent === '0') {
        currentScreen.textContent = 'Error, divide by zero';
        lastScreen.textContent = '';
    }
}


//operation functions//


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
            if (b === 0) return error()
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