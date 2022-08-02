console.log(add(2, 4)); //expect 6
console.log(subtract(2, 4)); //expect -2 
console.log(multiply(2, 4)); //expect 8
console.log(divide(2, 4)); //expect 0.5
console.log(power(2, 4)); //expect 16

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

function power(a, b) {
    return Math.pow(a, b);
}