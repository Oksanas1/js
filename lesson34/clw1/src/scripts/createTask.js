import { getLocalStorageData, setToLocalStorageData } from './storage.js';
import { renderTasks } from './renderTasks.js';
import { createTaskInBase } from './tasksGateway.js';

const renderID = () => Math.random().toString(16).slice(2);

const createTask = text => {
  const newTask = {
      id: renderID(),
      text,
      done: false,
      criateDate: new Date(),
      finishDate: null,
    };

  createTaskInBase(newTask);
  renderTasks();
};

export const addTasks = () => {
  const taskInputElement = document.querySelector('.task-input');

  if (!taskInputElement.value) {
    return;
  }

  createTask(taskInputElement.value);
  taskInputElement.value = '';
};
