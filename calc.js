const numBtn = document.querySelectorAll('[data-number]');
const operateBtn = document.querySelectorAll('[data-operator]');
const equalBtn = document.getElementById('equalsBtn')
const clearBtn = document.getElementById('clearBtn')
const delBtn = document.getElementById('delBtn')
const dotBtn = document.getElementById('dotBtn')
const lastOp = document.getElementById('lastOp')
const currentOp = document.getElementById('currentOp')

clearBtn.addEventListener('click', clearScreen);
delBtn.addEventListener('click', deleteNum);
dotBtn.addEventListener('click', appendDot);
numBtn.forEach((button) =>
    button.addEventListener('click', () => appendNum(button.textContent))
);

function appendNum(num) {
    if (currentOp.textContent === '0') currentOp.textContent = '';
    currentOp.textContent += num;
}

function appendDot() {
    if (currentOp.textContent.includes('.')) return;
    currentOp.textContent += '.';
}

function clearScreen() {
    currentOp.textContent = '0';
}

function deleteNum() {
    currentOp.textContent = currentOp.textContent.toString().slice(0, -1);
    if (currentOp.textContent === '') currentOp.textContent = '0';
}



operate();

function operate() {

    a = Number(a);
    b = Number(b);

    switch(operator) {
        case '+':
            return add(a, b)
        case '-':
            return subtract(a, b)
        case '*':
            return multiply(a, b)
        case '/':
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