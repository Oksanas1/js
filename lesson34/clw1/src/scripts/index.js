import { renderTasks } from './renderTasks.js';
import { setToLocalStorageData } from './storage.js';
import { getTasksList } from './tasksGateway.js';
import { initTodoListHendlers } from './todoList.js';

const initialPage = () => {
  getTasksList().then(taskList => {
    setToLocalStorageData('tasksList', taskList);
    renderTasks();
    initTodoListHendlers();
  });
};

document.addEventListener('DOMContentLoaded', initialPage);
