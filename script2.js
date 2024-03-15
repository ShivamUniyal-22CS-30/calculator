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
    let result;
    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case 'x':
            result = a * b;
            break;
        case '÷':
            if(b == 0){
                return 'Error';
            }
            result = a / b;
            break;
        default:
            result = '';
    }
    // Round the result to 2 decimal places
    return Math.round(result * 100) / 100;
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

        // divide by zero
        if(operators === '÷' && secondNum === 0){
            clearScreen();
            firstNumScreen.textContent = 'abe Bosdike sun ..'
            isOperatorClicked = false;
            document.getElementById('errorAudio').play();
        }
        else{
            result = operate(firstNum, operators, secondNum);
            if(!isNaN(result)){
                clearScreen();
                firstNumScreen.textContent = result;
                isOperatorClicked = false;
            }
            else{
                clearScreen();
                firstNumScreen.textContent = result;
                isOperatorClicked = false;
            }
        }
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
    if(secondNumScreen.textContent != ''){
        secondNumScreen.textContent = secondNumScreen.textContent.slice(0,-1);
    }
    else if(operatorScreen.textContent != ''){
        operatorScreen.textContent = '';
        isOperatorClicked = false;
    }
    else if(firstNumScreen.textContent != ''){
        firstNumScreen.textContent = firstNumScreen.textContent.slice(0,-1);
    }
})