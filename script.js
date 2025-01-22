let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    display.textContent = currentInput;
}

function performOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculateResult();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculateResult() {
    if (operator === '' || currentInput === '') return;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(previousInput) / parseFloat(currentInput);
            break;
        default:
            return;
    }
    display.textContent = result;
    currentInput = result.toString();
    operator = '';
    previousInput = '';
}

function clearDisplay() {
    display.textContent = '0';
    currentInput = '';
    operator = '';
    previousInput = '';
}
