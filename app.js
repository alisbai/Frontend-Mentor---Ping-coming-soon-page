let emailInput = document.getElementById('email-input');
let warningMessage = document.querySelector('.email-warning');

let emailValidator = new EmailValidator(emailInput, warningMessage);

emailValidator.assignEvent('input');