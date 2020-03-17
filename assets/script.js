//DOM Elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
//matching up array items to appropriate functions
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
}
//adding click function for generate button
generateEl.addEventListener('click', () => {
    const length = lengthEl.value;
    const hasLower = lowercaseEl.checked; 
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;
resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
    );
});
//generate password function 
function generatePassword(lower, upper, number, symbol, length) {
let generatedPassword = ''; 
const typesCount = lower + upper + number + symbol;
const typesArray = [{lower}, {upper}, {number}, {symbol}].filter
(
    item => Object.values(item)[0]
); 
if (typesCount === 0) {
    return '';
};
for (let i = 0; i < length; i += typesCount) {
    typesArray.forEach( types => {
    const funcName = Object.keys(types)[0];
    generatedPassword += randomFunc[funcName]();
})
}
var finalPassword = generatedPassword.slice(0, length);
return finalPassword;
};
// Generator functions
//lowercase letters func (charset from http://www.net-comber.com/charset.html)
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
//uppercase numbers func
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
//numbers func
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
//symbols func
function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}
//length func
function getLength()  {
    return length;
}

