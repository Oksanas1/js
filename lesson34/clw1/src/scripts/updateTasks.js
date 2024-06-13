import { renderTasks } from './renderTasks.js';
import { setToLocalStorageData } from './storage.js';
import { deleteTaskInBase, getTasksList, updateTaskInBase } from './tasksGateway.js';

const updateTask = clickedElement => {
  const done = clickedElement.checked;

  updateTaskInBase(clickedElement.dataset.id,
    {
      done,
      finishDate: done ? new Date() : null,
    }
  ).then(response => {
    if (response.ok) {
      getTasksList().then(tasks => {
        setToLocalStorageData('tasksList', tasks);
        renderTasks()
      });
    }
  });
};

const deleteTask = idTask => {
  deleteTaskInBase(idTask)
    .then(response => {
      if (response.ok) {
        getTasksList().then(tasks => {
          setToLocalStorageData('tasksList', tasks);
          renderTasks()
        });
      }
    });
};

export const onHandlerTask = event => {
  const clickedElement = event.target;

  switch(clickedElement.classList.value) {
    case ('list__item-checkbox') :
      updateTask(clickedElement);
      break;

    case ('list__item-delete-btn') :
      deleteTask(clickedElement.dataset.id);
      break;
  };  
};
