'uses strict';

import { renderTasks } from './scripts/renderTasks.js';
import { initTodoListHendlers } from './scripts/todoList.js';

const initialPage = () => {
  renderTasks();
  initTodoListHendlers();
};

document.addEventListener('DOMContentLoaded', initialPage);
