let operator = prompt("Enter an operator");
let a = prompt("Enter first number");
let b = prompt("Enter second number");
let answer;

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
        case '^':
            return power(a, b)
        default: 
            return null
    }

}

function add(a, b) {
    answer = a + b;
    console.log(answer);
}

function subtract(a, b) {
    answer = a - b;
    console.log(answer);
}

function multiply(a, b) {
    answer = a * b;
    console.log(answer);
}
 
function divide(a, b) {
    answer = a / b;
    console.log(answer);
}

function power(a, b) {
    answer = Math.pow(a, b);
    console.log(answer);
}