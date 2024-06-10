const repoListElem = document.querySelector('.repo-list');

export const cleanReposList = () => {
  repoListElem.textContent = '';
};

export const renderRepos = reposList => {
  const reposListElem = reposList.map(({ name }) => {
    const listElem = document.createElement('li');
    listElem.classList.add('repo-list__item');
    listElem.textContent = name;

    return listElem;
  });

  repoListElem.append(...reposListElem);
};
