const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

const btnFormElem = document.querySelector('.name-form__btn');
const nameInputElem = document.querySelector('.name-form__input');

userAvatarElem.src = 'https://img1.joyreactor.cc/pics/post/full/%D0%BA%D0%BE%D1%82%D1%8D-cats-%D0%B1%D0%BE%D1%80%D1%86%D1%83%D1%85%D0%B0-8466515.jpeg'

const fetchUserData = userName => {
  return fetch(`https://api.github.com/users/${userName}`)
  .then(response => response.json());
};

const renderUserData = userData => {
  const { avatar_url, name, location } = userData;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location
    ? `from ${location}`
    : '';
};

const onSearchUser = () => {
  const userName = nameInputElem.value;

  fetchUserData(userName)
    .then(userData => renderUserData(userData));
}

btnFormElem.addEventListener('click', onSearchUser);
