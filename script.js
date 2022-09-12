//Dom
const result = document.querySelector('.result');
const resultText = document.querySelector('.res-text');
const copy = document.querySelector('.copy');
const button = document.querySelector('.generate');
const range = document.querySelector('#range');
const rangeRes = document.querySelector('.range-res');
const number = document.querySelector('#number');
const specialChar = document.querySelector('#special-char');


//variable declaration
const strong = 'QWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%&[]{}<>?/|()*^qwertyuiopasdfghjklzxcvbnm';
const average = 'QWERTYUIOPASDFGHJKLZXCVBNM1234567890qwertyuiopasdfghjklzxcvbnm';
const weak = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';

button.addEventListener('click', displayResult);

function displayResult() {
    let password = '';
    let length = range.value;
    console.log(length);
    if (number.checked && specialChar.checked) {
        for (let i = 0; i < length; i++){
            password += strong[Math.floor(Math.random() * strong.length)]; 
        }
        
    }
    else if (number.checked || specialChar.checked) {
        for (let i = 0; i < length; i++){
            password += average[Math.floor(Math.random() * average.length)];
        }
    }
    
    else {
        for (let i = 0; i < length; i++){
            password += weak[Math.floor(Math.random() * weak.length)];
        }
    }
    
    resultText.value = password;

}

console.log(resultText.value);

range.addEventListener('change', () => {
    rangeRes.textContent = range.value;
});

copy.addEventListener('click', () => {
    if (resultText.value) {
        resultText.select();
        resultText.setSelectionRange(0, 99999999);
        navigator.clipboard.writeText(resultText.value);
        alert('Successful !!!')
    }

    else {
        alert('No Password !!!');
    }
})

