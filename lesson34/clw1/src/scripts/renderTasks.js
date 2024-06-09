import { getLocalStorageData } from './storage.js';
import { getTasksList } from './tasksGateway.js';


const listElement = document.querySelector('.list');

const createTaskCheckboxElement = (done, id) => {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = done;
  checkbox.dataset.id = id;
  checkbox.classList.add('list__item-checkbox');

  return checkbox;
};

const createDeleteTaskBtnElem = id => {
  const deleteTaskBtnElem = document.createElement('button');
  deleteTaskBtnElem.textContent = 'x';
  deleteTaskBtnElem.classList.add('list__item-delete-btn')
  deleteTaskBtnElem.dataset.id = id;

  return deleteTaskBtnElem;
};

const createTaskItemElement = (text, done, id) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');
  listItemElem.setAttribute('id', id);

  if (done) {
    listItemElem.classList.add('list__item_done');
  }

  listItemElem.append(createTaskCheckboxElement(done, id), text, createDeleteTaskBtnElem(id));

  return listItemElem;
};

export function renderTasks() {
  listElement.textContent = '';

  const tasksList = getTasksList();
  tasksList.then(tasks => tasks
    .map(
      ({ text, done, id }) => listElement.append(createTaskItemElement(text, done, id)))
    );
}

const onStorageChange = () => {
  renderTasks();
};

window.addEventListener('storage', onStorageChange);
