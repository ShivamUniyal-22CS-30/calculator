let numBtns = document.querySelectorAll('.fourBtns .numBtns');
let firstNumScreen = document.querySelector('.screen .firstNumScreen');

let operatorBtns = document.querySelectorAll('.operator');
let operatorScreen = document.querySelector('.operatorScreen');

let secondNumBtns = document.querySelectorAll('.fourBtns .numBtns');
let secondNumScreen = document.querySelector('.secondNumScreen');

let equalsToBtn = document.querySelector('.equalsToBtn');
let equalsToScreen = document.querySelector('.equalsToScreen');

let operators = '';
let result = '';
let currentNum = '';
let isOperatorClicked = false;

function clearScreen() {
    firstNumScreen.textContent = '';
    operatorScreen.textContent = '';
    secondNumScreen.textContent = '';
    equalsToScreen.textContent = '';
}

function operate(a, operator, b) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case 'x':
            return a * b;
        case '÷':
            return a / b;
        default:
            return '';
    }
}

numBtns.forEach((numBtn) => {
    numBtn.addEventListener('click', () => {
        if (!isOperatorClicked) {
            firstNumScreen.textContent += numBtn.textContent;
        } else {
            secondNumScreen.textContent += numBtn.textContent;
        }
    });
});

operatorBtns.forEach((operatorBtn) => {
    operatorBtn.addEventListener('click', () => {
        if (!isOperatorClicked) {
            operators = operatorBtn.textContent;
            operatorScreen.textContent = operators;
            isOperatorClicked = true;
        } else {
            let firstNum = parseFloat(firstNumScreen.textContent);
            let secondNum = parseFloat(secondNumScreen.textContent);
            result = operate(firstNum, operators, secondNum);
            clearScreen();
            firstNumScreen.textContent = result;
            operatorScreen.textContent = operatorBtn.textContent;
            secondNumScreen.textContent = '';
            isOperatorClicked = true;
            operators = operatorBtn.textContent;
        }
    });
});

equalsToBtn.addEventListener('click', () => {
    if (isOperatorClicked) {
        let firstNum = parseFloat(firstNumScreen.textContent);
        let secondNum = parseFloat(secondNumScreen.textContent);
        result = operate(firstNum, operators, secondNum);
        clearScreen();
        firstNumScreen.textContent = result;
        isOperatorClicked = false;
    }
});

// clearBtn
let clearBtn = document.querySelector('.clearBtn');
clearBtn.addEventListener('click',() => {
    clearScreen();
});

// deletebtn
let deleteBtn = document.querySelector('.deleteBtn');
deleteBtn.addEventListener('click', ()=>{
    if(firstNumScreen.textContent == true &&  operatorScreen.textContent == false && secondNumScreen.textContent == false ){
        firstNumScreen.textContent = '';
    }
    else if(firstNumScreen.textContent == true && operatorScreen.textContent == true && secondNumScreen.textContent == false ){
        operatorScreen.textContent = '';
    }
    else if(firstNumScreen.textContent == true && operatorScreen.textContent == true && secondNumScreen.textContent == true){
        secondNumScreen.textContent = '';
    }
})