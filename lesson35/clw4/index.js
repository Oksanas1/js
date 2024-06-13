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

//'use strict';

// /**
//  * @param {string[]} users
//  * @return {promise}
//  */

// export const getUsersBlogs = async users => {
//     try {
//       //const response = await fetch(`https://api.github.com/users/${userId}   https://666441d2932baf9032aa81f9.mockapi.io/api/v1/users/${userId}`);
//       const usersResponses = users
//         .map(userId => fetch(`https://666441d2932baf9032aa81f9.mockapi.io/api/v1/users/${userId}`)
//           .then(response => response.json())
//         );
//       const response = await Promise.all(usersResponses);
      
//       return response.map(({ blog }) => blog);
//     } catch (err) {
//       throw new Error('Failed to get user data' + err);
//     }
// };

// // examples
// //getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
// getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
// getUsersBlogs(['1', '2']).then(linksList => console.log(linksList))
