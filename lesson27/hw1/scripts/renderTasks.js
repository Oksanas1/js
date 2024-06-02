import { getLocalStorageData } from './storage.js';

const listElement = document.querySelector('.list');

const createTaskCheckboxElement = (done, id) => {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = done;
  checkbox.dataset.id = id;
  checkbox.classList.add('list__item-checkbox');

  return checkbox;
};

const createTaskItemElement = (text, done, id) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');

  if (done) {
    listItemElem.classList.add('list__item_done');
  }

  listItemElem.append(createTaskCheckboxElement(done, id), text);

  return listItemElem;
};

export function renderTasks() {
  listElement.textContent = '';
  const tasks = getLocalStorageData('tasksList');
  const tasksElems = tasks
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => createTaskItemElement(text, done, id));

  listElement.append(...tasksElems);
}

const onStorageChange = () => {
  renderTasks();
};

window.addEventListener('storage', onStorageChange);
