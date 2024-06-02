import { getLocalStorageData, setToLocalStorageData } from './storage.js';
import { renderTasks } from './renderTasks.js';

const taskInputElement = document.querySelector('.task-input');
const tasks = getLocalStorageData('tasksList');

const renderID = () => Math.random().toString(16).slice(2);

const createTesk = text => {
  const newTask = { id: renderID(), text, done: false };
  tasks.push(newTask);
  setToLocalStorageData('tasksList', tasks);
  renderTasks();
};

export const addTasks = () => {
  if (!taskInputElement.value) {
    return;
  }

  createTesk(taskInputElement.value);
  taskInputElement.value = '';
};
