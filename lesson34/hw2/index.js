const baseUrl = 'https://666441d2932baf9032aa81f9.mockapi.io/api/v1/users';

const loginFormElem = document.querySelector('.login-form');
const userDataElements = Array.from(document.querySelectorAll('.form-input'));
const submitBtmElement = document.querySelector('.submit-button');

const onInputChange = (e) => {
  const { name, password, email } = loginFormElem.elements;
  submitBtmElement.disabled = !(name.reportValidity() && password.reportValidity() && email.reportValidity());
};

userDataElements.map(input => input.addEventListener('input', onInputChange));

const createUserInBase = newUser => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });
}

const mapUsers = users => users.map(({ _id, ...rest }) => ({ id: _id, ...rest }));

const getUsers = () => {
  return fetch(baseUrl)
    .then(response => response.json())
    .then(users => users.mapUsers(users));
}

const createUser = () => {
  const { name, password, email } = loginFormElem.elements;
  const newUser = {
    name: name.value,
    password: password.value,
    email: email.value,
  }

  createUserInBase().finally(() => alert(JSON.stringify(newUser)));
  userDataElements.map(input => input.value = "");
};

const onSubmit = event => {
  event.preventDefault();

  createUser();
}

submitBtmElement.addEventListener('click', onSubmit);