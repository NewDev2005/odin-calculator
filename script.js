function add(num1,num2){
return console.log(num1 + num2);
};

function substract(num1,num2){
    return console.log(num1 - num2);
};

function product(num1, num2){
    return console.log(num1 * num2);
};

function divide(num1, num2){
    return console.log(num1 / num2);
};

let operator;
let operand1;
let operand2;

function operate(number1, oprtr, number2){
if(oprtr === '+'){
 return add(number1,number2);
}
else if(oprtr === '-'){
    return substract(number1,number2);
}
else if(oprtr === '*'){
    return product(number1,number2);
}
else if(oprtr === '/'){
    return divide(number1,number2);
}
}


