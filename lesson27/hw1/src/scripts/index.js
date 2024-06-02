'uses strict';

import { renderTasks } from './renderTasks.js';
import { initTodoListHendlers } from './todoList.js';

const initialPage = () => {
  renderTasks();
  initTodoListHendlers();
};

document.addEventListener('DOMContentLoaded', initialPage);
