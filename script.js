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
function displayText(){
    const displayOutput = document.createElement('div');
    const para = document.createElement('p');
    para.classList.add('paragraph');
    displayOutput.classList.add('display-para');
    const container = document.querySelector('#container');
    displayOutput.appendChild(para);
    container.appendChild(displayOutput);
}
displayText();

const btnContainer = document.createElement('div');
btnContainer.classList.add('btn-container');
document.getElementById('container').appendChild(btnContainer);

function digitBtn(){
    const div = document.createElement('div');
    div.classList.add('digit-container');
    const btn = document.createElement('button');
    btn.classList.add('digit');
    div.appendChild(btn);
    document.querySelector('.btn-container').appendChild(div);
}
function calcBtn(){
    for(let i=0; i<=16; i++){
        digitBtn();
    };
}
calcBtn();

function insertTextInBtn(){
    const container = document.getElementById('container');
    const btnContainer = container.querySelector('.btn-container');
    const btnChild = btnContainer.getElementsByClassName('digit');
    
    for(let i=0; i<btnChild.length; i++){
        for(let j=0; j<=16; j++){
            if(j === 10){
                btnChild[j].textContent = '+';
            }
            else if(j === 11){
                btnChild[j].textContent = '-';
            }
            else if(j === 12){
                btnChild[j].textContent = '*';
            }
            else if(j === 13){
                btnChild[j].textContent = '/';
            }
            else if(j === 14){
                btnChild[j].textContent = '=';
            }
            else if(j === 15){
                btnChild[j].textContent = '.';
            }
            else if(j === 16){
                btnChild[j].textContent = 'C'
            }
           
            else{
                btnChild[j].textContent = j;
            }
           
        }
    }
}
insertTextInBtn();
