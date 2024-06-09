const baseUrl = 'https://666441d2932baf9032aa81f9.mockapi.io/api/v1/users';
const loginFormElem = document.querySelector('.login-form');
const userDataElements = Array.from(document.querySelectorAll('.form-input'));
const submitBtmElement = document.querySelector('.submit-button');

const onInputChange = (e) => {
  const { name, password, email } = loginFormElem.elements;
  submitBtmElement.disabled = !(name.reportValidity() && password.reportValidity() && email.reportValidity());
};

userDataElements.map(input => input.addEventListener('input', onInputChange));

const createUser = () => fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(Object.fromEntries(new FormData(loginFormElem))),
  });

const onSubmit = event => {
  event.preventDefault();

  createUser()
    .then(response => response.json())
    .then(result => alert(JSON.stringify(result)))
    .finally(loginFormElem.reset());
}

submitBtmElement.addEventListener('click', onSubmit);