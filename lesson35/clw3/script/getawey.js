const defaultUrl = 'https://api.github.com/users/';
const defaultError = new Error('Failed to load data');

export const fetchUserData = userName => {
  return fetch(defaultUrl + userName)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw defaultError;
      }})
};

export const fetchRepositories = url => {
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw defaultError;
      }})
};
