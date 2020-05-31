const buttons = document.querySelector('.buttons');
const answer = document.querySelector('.answer');
const history = document.querySelector('.history');

let displayHistory = '0';
let displayAnswer = '0';

let firstNum = '';
let secondNum = '';
let showHistory = '';
let result = '';
let operator = '';
let regExp = /\d/;
let openResult = false;


answer.innerHTML = displayAnswer;
history.innerHTML = displayHistory;

buttons.addEventListener('click', event => {
    
    if (regExp.test(event.target.getAttribute('data-value')) && showHistory.length < 6 && firstNum.length < 6 && !operator) {

        setFirstNum();    

    } else if (regExp.test(event.target.getAttribute('data-value')) && secondNum.length < 6 && operator && !openResult) {

        setSecondNum();

    } else if (event.target.getAttribute('data-value') === 'c') {

        clearAll();

    } else if (event.target.getAttribute('data-value') === '.') {

        // setDot();        
        
    } else if (event.target.getAttribute('data-value') === '=') {
        
        calculateResult();

    } else if (firstNum && !regExp.test(event.target.getAttribute('data-value')) && !operator) {

        setSign();

    }
});

function setFirstNum() {
    firstNum += event.target.getAttribute('data-value');    
    answer.innerHTML = firstNum;      
    history.innerHTML = firstNum;    
}

function setSecondNum() {
    secondNum += event.target.getAttribute('data-value');    
    answer.innerHTML = secondNum;
    showHistory = firstNum + ' ' + operator + ' ' + secondNum;
    history.innerHTML = showHistory;
}

function setSign() {
    operator = event.target.getAttribute('data-value');
    showHistory = firstNum + ' ' + operator;
    history.innerHTML = showHistory;    
}

function calculateResult() {
    switch (operator) {
        case '+': 
            result = parseFloat(firstNum) + parseFloat(secondNum);
            answer.innerHTML = result;            
            break;
        case '-': 
            result = parseInt(firstNum) - parseInt(secondNum);
            answer.innerHTML = result;
            break;
        case 'x': 
            result = parseInt(firstNum) * parseInt(secondNum);
            answer.innerHTML = result;
            break;
        case '/': 
            result = parseInt(firstNum) / parseInt(secondNum);
            answer.innerHTML = result;
            break;
    }
    openResult = true;
}

// function setDot() {
//     if (!operator && !firstNum.includes('.')) {
//         firstNum += '.';
//         answer.innerHTML = firstNum;      
//         history.innerHTML = firstNum;
//         // console.log('dot');
//     }
// }

function clearAll() {
    firstNum = '';
    secondNum = '';
    operator = '';
    answer.innerHTML = displayAnswer;
    history.innerHTML = displayHistory;
    openResult = false;
}