function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

let firstNum = '';
let operator = '';
let secondNum = '';
let isOperatorClicked = false;

function operate(operator,firstNum,secondNum){
    if(operator == "+"){
        return add(firstNum,secondNum);
    }
    else if(operator == "-"){
        return sub(firstNum,secondNum);
    }
    else if(operator == "x"){
        return multiply(firstNum,secondNum);
    }
    else if(operator == "/"){
        return divide(firstNum,secondNum);
    }
};

function imPregnateTheScreen()
{
    
    let numBtns = document.querySelectorAll('.fourBtns .numBtns');
    numBtns.forEach((numBtn) => {
        numBtn.addEventListener('click',() => {
            if(isOperatorClicked == false){
                // alert('FUCK U');
                let displayValue = numBtn.textContent;
                let firstNumScreen = document.querySelector('.screen .firstNumScreen');
                firstNumScreen.textContent += displayValue;
                firstNum = firstNumScreen.textContent;
                console.log(`1st num :${firstNum}`);
            }
        })
    })

    let operatorBtns = document.querySelectorAll('.operator');
    operatorBtns.forEach((operatorBtn) => {
        operatorBtn.addEventListener('click', () => {
            let operatorVal = operatorBtn.textContent;
            let operatorScreen = document.querySelector('.operatorScreen');
            operatorScreen.textContent = operatorVal;
            operator = operatorVal;
            console.log(`operator: ${operator}`);
            isOperatorClicked = true;
        })
    })

    let secondNumBtns = document.querySelectorAll('.fourBtns .numBtns');
    secondNumBtns.forEach((secondNumBtn) => {
        secondNumBtn.addEventListener('click',() => {
                if(isOperatorClicked ==true)
                {
                let secondNumValFromBtn = secondNumBtn.textContent;
                let secondNumScreen = document.querySelector('.secondNumScreen');
                secondNumScreen.textContent += secondNumValFromBtn;
                secondNum = secondNumScreen.textContent;
                console.log(`2nd num : ${secondNum}`);
                }
            })
        })
    }



imPregnateTheScreen();