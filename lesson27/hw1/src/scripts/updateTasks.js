import { getLocalStorageData, setToLocalStorageData } from './storage.js';
import { renderTasks } from './renderTasks.js';

export const changeStatusTasks = event => {
  const clickedelement = event.target;

  if (!clickedelement.classList.contains('list__item-checkbox')) {
    return;
  }

  const tasks = getLocalStorageData('tasksList');
  const newTask = tasks.map(task => {
    if (task.id === clickedelement.dataset.id) {
      const done = clickedelement.checked;

      return {
        ...task,
        done,
        finishDate: done ? new Date().toISOString() : null,
      };
    }

    return task;
  });

  setToLocalStorageData('tasksList', newTask);
  renderTasks();
};
