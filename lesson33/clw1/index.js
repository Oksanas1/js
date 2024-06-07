const btnFormElem = document.querySelector('.name-form__btn');
const nameInputElem = document.querySelector('.name-form__input');

const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
// 

const fetchUserData = userName => {
  return fetch(`https://api.github.com/users/${userName}`)
  .then(response => response.json());
};

const renderUserData = userData => {
  const { avatar_url, name, location } = userData;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location
    ? location
    : '';
};

const onSearchUser = () => {
  const userName = nameInputElem.value;

  fetchUserData(userName)
    .then(userData => renderUserData(userData));
}

btnFormElem.addEventListener('click', onSearchUser)
