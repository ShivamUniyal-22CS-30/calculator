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