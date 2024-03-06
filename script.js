// functions for basic arithmetic operations
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

function imPregnateTheScreen(){
    let numBtns = document.querySelectorAll('.fourBtns .numBtns');
    numBtns.forEach((numBtn) => {
        numBtn.addEventListener('click',()=>{
            // alert('FUCK U');
            let displayValue = numBtn.textContent;
            let screenText = document.querySelector('.screen .screenText');
            screenText.textContent = displayValue;
        })
    })
}

imPregnateTheScreen();