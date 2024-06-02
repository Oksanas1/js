import { getLocalStorageData, setToLocalStorageData } from './storage.js';
import { renderTasks } from './renderTasks.js';

const tasks = getLocalStorageData('tasksList');

export const changeStatusTasks = event => {
  if (!event.target.classList.contains('list__item-checkbox')) return;

  const clickedCheckBox = event.target;
  tasks.find(task => task.id === clickedCheckBox.dataset.id).done = clickedCheckBox.checked;
  setToLocalStorageData('tasksList', tasks);
  renderTasks();
};
