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
                let displayScreen = document.querySelector('.screen .screenText');
                displayScreen.textContent += displayValue;
                firstNum = displayScreen.textContent;
                console.log(`1st num :${firstNum}`);
            }
        })
    })

    let operatorBtns = document.querySelectorAll('.operator');
    operatorBtns.forEach((operatorBtn) => {
        operatorBtn.addEventListener('click', () => {
            let operatorDisplay = operatorBtn.textContent;
            let displayScreen = document.querySelector('.screenText');
            displayScreen.textContent = operatorDisplay;
            operator = operatorDisplay;
            console.log(`operator: ${operator}`);
            isOperatorClicked = true;
        })
    })

    let secondNumBtns = document.querySelectorAll('.fourBtns .numBtns');
    secondNumBtns.forEach((secondNumBtn) => {
        secondNumBtn.addEventListener('click',() => {
                if(isOperatorClicked ==true)
                {
                let getTextContentFromBtn = secondNumBtn.textContent;
                let displayScreen = document.querySelector('.screenText');
                displayScreen.textContent += getTextContentFromBtn;
                secondNum = displayScreen.textContent;
                console.log(`2nd num : ${secondNum}`);
                }
            })
        })
    }



imPregnateTheScreen();