const buttons = document.querySelector('.buttons');
const answer = document.querySelector('.answer');
const history = document.querySelector('.history');

let displayHistory = '0';
let displayNum = '0';
let firstNum = '';
let secondNum = '';
let showHistory = '';
let result = '';
let operator = '';
let regExp = /\d/;


answer.innerHTML = displayNum;
history.innerHTML = displayHistory;

buttons.addEventListener('click', event => {
    
    if (regExp.test(event.target.getAttribute('data-value')) && firstNum.length < 6) {
        setNum();     
        
    } else if (event.target.getAttribute('data-value') === 'c') {
        clearAll();
    } else if (event.target.getAttribute('data-value') === '.') {
        console.log('dot');
    } 
});

function setNum() {
    firstNum += event.target.getAttribute('data-value');    
    answer.innerHTML = firstNum;
    history.innerHTML = firstNum;
}

function clearAll() {
    firstNum = '';
    answer.innerHTML = displayNum;
    history.innerHTML = displayHistory;
}