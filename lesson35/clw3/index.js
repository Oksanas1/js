import { fetchRepositories, fetchUserData } from "./script/getawey.js";
import { cleanReposList, renderRepos } from "./script/repos.js";
import { hidenSpinner, showSpinner } from "./script/spinner.js";
import { renderUserData } from "./script/user.js";

const nameInputElem = document.querySelector('.name-form__input');
const btnElement = document.querySelector('.name-form__btn');
const defaultUser = {
  name: '',
  locatio: '',
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
};

renderUserData(defaultUser);

const onSearchUser = ()=> {
  cleanReposList();
  const userName = nameInputElem.value;

  showSpinner();
  fetchUserData(userName)
    .then(userData => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then(url => fetchRepositories(url))
    .then(reposList => {
      renderRepos(reposList);
      userName = '';
    })
    .catch(err => {
      alert(err.message);
    })
    .finally(hidenSpinner());
};

btnElement.addEventListener('click', onSearchUser);