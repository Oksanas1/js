import { getLocalStorageData, setToLocalStorageData } from './storage.js';
import { renderTasks } from './renderTasks.js';
import { deleteTaskInBase, updateTaskInBase } from './tasksGateway.js';
//const tasks = getLocalStorageData('tasksList');

const updateTask = clickedElement => {
  const done = clickedElement.checked;

  updateTaskInBase(clickedElement.dataset.id, {
    done,
    finishDate: done ? new Date() : null,
  })

  renderTasks();
};

const deleteTask = idTask => {
  deleteTaskInBase(idTask);
  renderTasks();
};

export const onHandlerTask = event => {
  const clickedElement = event.target;
  console.log(clickedElement)

  switch(clickedElement.classList.value) {
    case ('list__item-checkbox') :
      updateTask(clickedElement);
      break;

    case ('list__item-delete-btn') :
      deleteTask(clickedElement.dataset.id);
      break;
  };  
};
