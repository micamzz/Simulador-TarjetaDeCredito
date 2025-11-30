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

form.addEventListener('submit', (evento) => {
   evento.preventDefault();

   const isNameValid = validateField(inputName, 'El nombre no puede estar vacío');
   let isNumberValid = validateField(inputNumber, 'El número de tarjeta no puede estar vacío');
   const isMonthValid = validateField(inputMonth, 'Por favor, complete el mes');
   const isYearValid = validateField(inputYear, 'Por favor, complete el año');
   const isCvcValid = validateField(inputCVC, 'Por favor, complete el codigo de seguridad');

   if(isNumberValid){
      if(inputNumber.value.length < 19){
         renderError(inputNumber, 'El número debe tener 16 digitos');
         isNumberValid = false;
      }
   }
   
   if (isNameValid && isNumberValid && isMonthValid && isYearValid && isCvcValid) {
      form.classList.add('disabled');
      msj.classList.remove('disabled');
   }
});

buttomContinue.addEventListener('click', () => {

   form.classList.remove('disabled');
   msj.classList.add('disabled');
   form.reset();
   cardName.innerText = 'Jane Appleseed';
   cardNumber.innerText = '0000 0000 0000 0000';
   cardCVC.innerText = '000';
   cardYear.innerText = '00';
   cardMonth.innerText = '00';

});


function validateField(inputElement, mensajeError) {

   let msjExistente = inputElement.nextElementSibling;

   if (inputElement.value.trim() === '') {
      renderError(inputElement, mensajeError);
      return false;
   } else {
      if (msjExistente && msjExistente.classList.contains('error-message')) {
         msjExistente.remove();
      }
      return true;
   }
}


function renderError(input, mensaje){
   const msjExistente = input.nextElementSibling;

    if (!msjExistente || !msjExistente.classList.contains('error-message')) {
         const errorTag = document.createElement('span');
         errorTag.textContent = mensaje;
         errorTag.classList.add('error-message');
         input.insertAdjacentElement('afterend', errorTag);

      }else{
         msjExistente.textContent = mensaje;
      }
}