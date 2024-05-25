const emailElement = document.querySelector('#email');
const passwordElement = document.querySelector('#password');
const btnSubmitElement = document.querySelector('.submit-button');
const errorEmailElement = document.querySelector('.error-text_email');
const errorPasswordElement = document.querySelector('.error-text_password');

const isRequired = value => value
 ? undefined 
 : 'Required';

const isEmail = value => value.includes('@')
	? undefined
  : 'Should be an email';
  
const validatorsByFaild = {
	email: [ isRequired, isEmail ],
  password: [ isRequired ]
};

const validate = (fieldName, value) => {
	const validators = validatorsByFaild[fieldName];
  
  return validators
  	.map(validator => validator(value))
    .filter(errorText => errorText)
    .join(', ')
};

const emailInputChange = event => {
	const textError = validate('email', event.target.value);

  errorEmailElement.textContent = textError;
};

const passwordInputChange = (event) => {
	const textError = validate('password', event.target.value);

  errorPasswordElement.textContent = textError;
};

emailElement.addEventListener('input', emailInputChange);
passwordElement.addEventListener('input', passwordInputChange);

const formElem = document.querySelector('.login-form');

const onSubmit = event => {
 	event.preventDefault();
 	const formData = Object.fromEntries(new FormData(formElem));
 	alert(JSON.stringify(formData));
 }
 
 btnSubmitElement.addEventListener('click', onSubmit);

/*
* take input value from form
* validation value
** email not empty
** if empty print text 'Required'
** email mast have @
** if didn’t have print text 'Should be an email'
** if have two error split them ', '
** all mistake pritn in error-text_email
** password must by not empty
** if empty print text 'Required'
** mistake pritn in error-text_password
* when submit fort alert all values in form
*/