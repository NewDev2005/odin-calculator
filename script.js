function add(num1,num2){
 return operationResult = num1 + num2;
 
}

function substract(num1,num2){
    return operationResult = num1 - num2;
};

function product(num1, num2){
    return operationResult = num1 * num2;
};

function divide(num1, num2){
    return operationResult = num1 / num2;
};

let operator;  //some GlobalVariables 
let operand1 = '';
let operand2 = '';
let operationResult;
let saveDisplayValue ;
let result;
let operandArray = [];
let operatorArray = [];

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

function operation(){
    if(operand1.match(/\D$/) !== null){
        operand1 = operand1.replace(/\D$/,'');

    operandArray = [Number(operand1),Number(operand2)];
    operatorArray = [operator];
    } 
    else{
        operandArray = [Number(operand1),Number(operand2)];
        operatorArray = [operator];
    }

    if(operatorArray[0] !== undefined && operandArray[1] !== undefined){
    return operate(operandArray[0],operatorArray[0],operandArray[1]);
    }
}


let concatenate = '';

function activateBtn(){
    
    const container = document.getElementById('container');
    const btnContainer = container.querySelector('.btn-container');
    const btnChild = btnContainer.getElementsByClassName('digit');
    
    for(let i=0; i<=16; i++){
       if(i === 12){
        btnChild[i].addEventListener("click", () => {
            operation();
            operand2 = '';
            concatenate =  document.querySelector('.paragraph').textContent = operationResult;
            document.querySelector('.paragraph').textContent = concatenate; 
        });
    }
       else if(i === 16){
        btnChild[i].addEventListener("click", () => {  
            location.reload();
        });
       }
       else {
        btnChild[i].addEventListener("click",() => {
            
          if(operationResult === undefined){
            if(operand1.match(/[+]/g) !== null){
                operand2 += btnChild[i].textContent.replace(/[+]/g,'').replace(/[*]/g,'').replace(/['/']/g,'').replace(/['-']/g,'');
                operator = '+';
            }
            else if(operand1.match(/[-]/g) !== null){
                operand2 += btnChild[i].textContent.replace(/[+]/g,'').replace(/[*]/g,'').replace(/['/']/g,'').replace(/['-']/g,'');
                operator = '-';
            }
            else if(operand1.match(/[*]/g) !== null){
                operand2 += btnChild[i].textContent.replace(/[+]/g,'').replace(/[*]/g,'').replace(/['/']/g,'').replace(/['-']/g,'');
                operator = '*';
            }
            else if(operand1.match(/[/]/g) !== null){
                operand2 += btnChild[i].textContent.replace(/[+]/g,'').replace(/[*]/g,'').replace(/['/']/g,'').replace(/['-']/g,'');
                operator = '/';
            }
            else{
                operand1 += btnChild[i].textContent; 

            }
          }
          else{
            operand1 = String(operationResult);
            operand2 += btnChild[i].textContent.replace(/[+]$/,'').replace(/[*]$/,'').replace(/['/']$/,'').replace(/['-']$/,'');
           
          }
            console.log(operand1);
            console.log(operand2);
            concatenate += document.querySelector('.paragraph').textContent = btnChild[i].textContent; 
            document.querySelector('.paragraph').textContent = concatenate;
            
        });
    }
    }
    }
activateBtn();
