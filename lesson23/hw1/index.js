const tasks = [
  { id: '1', text: 'Buy milk', done: false },
  { id: '2', text: 'Pick up Tom from airport', done: false },
  { id: '3', text: 'Visit party', done: false },
  { id: '4', text: 'Visit doctor', done: true },
  { id: '5', text: 'Buy meat', done: true },
];

const listElement = document.querySelector('.list');

const changeItemListTasks = event => {
  const clickedCheckBox = event.target;
  tasks.find(task => task.id === clickedCheckBox.dataset.id).done = clickedCheckBox.checked;
  listElement.textContent = '';
  renderTasks(tasks);
};

const renderID = () => Math.random().toString(16).slice(2);

function renderTasks(tasksList = tasks) {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');

      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.dataset.id = id;
      checkbox.classList.add('list__item-checkbox');
      checkbox.addEventListener('click', changeItemListTasks);

      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElement.append(...tasksElems);
}

renderTasks(tasks);

const taskInputElement = document.querySelector('.task-input');
const createBtnElemnt = document.querySelector('.create-task-btn');

const addTasks = () => {
  if (!taskInputElement.value) {
    return;
  }
  const newTask = { id: renderID(), text: taskInputElement.value, done: false };
  tasks.push(newTask);
  taskInputElement.value = '';
  listElement.textContent = '';
  renderTasks(tasks);
};

createBtnElemnt.addEventListener('click', addTasks);
