import { fetchRepositories, fetchUserData } from "./script/getawey.js";
import { renderRepos } from "./script/repos.js";
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

const onSearchUser = async () => {
  showSpinner();

  const userName = nameInputElem.value;
  try {
    const userData  = await fetchUserData(userName);
    renderUserData(userData);
    const reposList = await fetchRepositories(userData.repos_url);
    renderRepos(reposList);
    nameInputElem.value = '';
  } catch(err) {
    alert(err.message);
  } finally {
    hidenSpinner();
  }
};

btnElement.addEventListener('click', onSearchUser);
