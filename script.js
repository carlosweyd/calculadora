let currentInput = '';
let operation = '';
let previouInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDiplay();
}

function setOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calulatte();
    }
    operation = op;
    preiviusInput = currentInput;
    currentInput = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previouInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+': result = prev + current; break;
        case '-': result = prev - current; break;
        case '*': result = prev * current; break;
        case '/': result = prev / current; break;
        default: return;
    }
    currentInput = result;
    operation = '';
    previouInput = '';
    updateDiplay();
}

function clearDisplay() {
    currentInput = '';
    operation = '';
    previouInput = '';
    updateDiplay();
}

function updateDiplay() {
    document.getElementById('diplay').value = currentInput;
}

