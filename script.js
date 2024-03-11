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
     
        btnChild[0].textContent = 7;
        btnChild[1].textContent = 8;
        btnChild[2].textContent = 9;
        btnChild[3].textContent = 4;
        btnChild[4].textContent = 5;
        btnChild[5].textContent = 6;
        btnChild[6].textContent = 1;
        btnChild[7].textContent = 2;
        btnChild[8].textContent = 3;
        btnChild[9].textContent = 0;
        btnChild[10].textContent = '+'
        btnChild[11].textContent = '-';
        btnChild[12].textContent = '=';
        btnChild[13].textContent = '/';
        btnChild[14].textContent = '*';
        btnChild[15].textContent = '.';
        btnChild[16].textContent = 'AC';
}
insertTextInBtn();

let saveDisplayValue;

function activateBtn(){
    const container = document.getElementById('container');
    const btnContainer = container.querySelector('.btn-container');
    const btnChild = btnContainer.getElementsByClassName('digit');

    btnChild[0].addEventListener("click",() => {
        document.querySelector('.paragraph').textContent = 7;
        saveDisplayValue = document.querySelector('.paragraph').textContent;
    });

    btnChild[1].addEventListener("click",() => {
        document.querySelector('.paragraph').textContent = 8;
        saveDisplayValue = document.querySelector('.paragraph').textContent;
    });

    btnChild[2].addEventListener("click",() => {
        document.querySelector('.paragraph').textContent = 9;
        saveDisplayValue = document.querySelector('.paragraph').textContent;
    });

    btnChild[3].addEventListener("click",() => {
        document.querySelector('.paragraph').textContent = 4;
        saveDisplayValue = document.querySelector('.paragraph').textContent;
    });

    btnChild[4].addEventListener("click",() => {
        document.querySelector('.paragraph').textContent = 5;
        saveDisplayValue = document.querySelector('.paragraph').textContent;
    });

    btnChild[5].addEventListener("click",() => {
        document.querySelector('.paragraph').textContent = 6;
        saveDisplayValue = document.querySelector('.paragraph').textContent;
    });

    btnChild[6].addEventListener("click",() => {
        document.querySelector('.paragraph').textContent = 1;
        saveDisplayValue = document.querySelector('.paragraph').textContent;
    });

    btnChild[7].addEventListener("click",() => {
        document.querySelector('.paragraph').textContent = 2;
        saveDisplayValue = document.querySelector('.paragraph').textContent;
    });

    btnChild[8].addEventListener("click",() => {
        document.querySelector('.paragraph').textContent = 3;
        saveDisplayValue = document.querySelector('.paragraph').textContent;
    });

    btnChild[9].addEventListener("click",() => {
        document.querySelector('.paragraph').textContent = 0;
        saveDisplayValue = document.querySelector('.paragraph').textContent;
    });

    btnChild[10].addEventListener("click",() => {
        document.querySelector('.paragraph').textContent = '+';
        saveDisplayValue = document.querySelector('.paragraph').textContent;
    });

    btnChild[11].addEventListener("click",() => {
        document.querySelector('.paragraph').textContent = '-';
        saveDisplayValue = document.querySelector('.paragraph').textContent;
    });

    btnChild[13].addEventListener("click",() => {
        document.querySelector('.paragraph').textContent = '/';
        saveDisplayValue = document.querySelector('.paragraph').textContent;
    });

    btnChild[14].addEventListener("click",() => {
        document.querySelector('.paragraph').textContent = '*';
        saveDisplayValue = document.querySelector('.paragraph').textContent;
    });

    btnChild[15].addEventListener("click",() => {
        document.querySelector('.paragraph').textContent = '.';
        saveDisplayValue = document.querySelector('.paragraph').textContent;
    });

}

activateBtn();
