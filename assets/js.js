const display = document.getElementById("display");
const numbers =document.querySelectorAll(".btn");
// const operator = document.querySelectorAll(".operator");

let firstNumber = "";
let secondNumber = "" ;
let currentOperator = null ;

numbers.forEach((element) => {
    element.addEventListener("click", (e) => {
        const value = element.textContent;
        if (!isNaN(value)) { // Chiffre
            if (currentOperator) {
                secondNumber += value;
            } else {
                firstNumber += value;
            }
            display.textContent = secondNumber || firstNumber;

        }else if(['+', '-', '*', '/'].includes(value)) { // Opérateur
            currentOperator = value;

        } else if (value === '=') { // Egal
            if (firstNumber && secondNumber && currentOperator) {
                display.textContent = calculate(firstNumber, secondNumber, currentOperator);
                firstNumber = ''; 
                secondNumber = '';
                currentOperator = null;
            }

        } else if (value === 'C') { // Clear
            firstNumber = '';
            secondNumber = '';
            currentOperator = null;
            display.textContent = '';
        }
    });
});


function calculate(firstNumber , secondNumber, operator) {
     // Conversion des entrées en nombres
     firstNumber = parseFloat(firstNumber);
     secondNumber = parseFloat(secondNumber);
    switch (operator) {
        case "+":
            return firstNumber + secondNumber ;
        case "/":
            return firstNumber / secondNumber ;
        case "-":
            return firstNumber - secondNumber ;
        case "*":
            return firstNumber * secondNumber ;
        default:
            break;
    }
}

