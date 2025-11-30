const inputName = document.querySelector('#input-name');
const inputNumber = document.querySelector('#input-number');
const inputMonth = document.querySelector('#input-month');
const inputYear = document.querySelector('#input-year');
const inputCVC = document.querySelector('#input-cvc');
const cardNumber= document.querySelector('.card-number');
const cardName= document.querySelector('#card-name');
const cardMonth= document.querySelector('#card-month');
const cardYear= document.querySelector('#card-year');
const cardCVC= document.querySelector('#card-cvc');
const form = document.querySelector('.form');
const msj = document.querySelector('#thank-you');
const buttomContinue = document.querySelector('#continue');


inputName.addEventListener('input', () => {
   cardName.innerText = inputName.value;

   if(inputName.value.length === 0){
    cardName.innerText = 'Jane Appleseed';
   }
});

// Validacion de Tarjeta de credito (cleave.js/)
var cleave = new Cleave('#input-number', {
    creditCard: true,
});

inputNumber.addEventListener('input', () => {
   cardNumber.innerText = inputNumber.value;

   if(inputNumber.value.length === 0){
    cardNumber.innerText = '0000 0000 0000 0000';
   }
});

inputMonth.addEventListener('input', () => {
   cardMonth.innerText = inputMonth.value;

   if(inputMonth.value.length === 0){
    cardMonth.innerText = '00';
   }
});

inputYear.addEventListener('input', () => {
   cardYear.innerText = inputYear.value;

   if(inputYear.value.length === 0){
    cardYear.innerText = '00';
   }
});

inputCVC.addEventListener('input', () => {
   cardCVC.innerText = inputCVC.value;

   if(inputCVC.value.length === 0){
    cardCVC.innerText = '000';
   }
});

form.addEventListener('submit', (evento) =>{
    evento.preventDefault();

    form.classList.add('disabled');
    msj.classList.remove('disabled');

});


buttomContinue.addEventListener('click', ()=>{

    form.classList.remove('disabled');
    msj.classList.add('disabled');
    form.reset();
    cardNumber.innerText = '0000 0000 0000 0000';
     cardCVC.innerText = '000';
     cardYear.innerText = '00';
     cardMonth.innerText = '00';

});
