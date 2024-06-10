const defaultUrl = 'https://api.github.com/users/';
const defaultError = new Error('Failed to load data');

export const fetchUserData = async userName => {
  const response = await fetch(`${defaultUrl}${userName}`);
  if (response.ok) {
    return await response.json();
  }
  
  throw defaultError;
};

export const fetchRepositories = async url => {
  const response = await fetch(url)
  if (response.ok) {
    return await response.json();
  }

  throw defaultError;
};
