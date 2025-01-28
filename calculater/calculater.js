let displayValue = '0';
let operator = '';
let firstOperand = null;

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}

function appendToDisplay(value) {
    if (displayValue === '0' && value !== '.') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
} 

function clearDisplay() {
    displayValue = '0';
    operator = '';
    firstOperand = null;
    updateDisplay();
}

function calculate() { 
    const expression = displayValue.replace(/[^-()\d/*+.]/g, '');
    const result = eval(expression);
    displayValue = result.toString();
    updateDisplay();
}
updateDisplay(); 

