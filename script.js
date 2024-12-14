let displayValue = '';
const resultSound = new Audio('result-sound.mp3'); // Load the sound effect for results

function playResultSound() {
    resultSound.currentTime = 0; // Reset sound to start
    resultSound.play();
}

function appendValue(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function performOperation(operator) {
    displayValue += ` ${operator} `;
    document.getElementById('display').value = displayValue;
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString(); // Calculate the result
        document.getElementById('display').value = displayValue;
        playResultSound(); // Play sound when result is calculated
    } catch {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}

function applyFunction(func) {
    try {
        displayValue = func + '(' + displayValue + ')'; // Wrap the current value
        const result = eval(displayValue); // Evaluate result
        displayValue = result.toString();
        document.getElementById('display').value = displayValue;
        playResultSound(); // Play sound when advanced function is applied
    } catch {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}
