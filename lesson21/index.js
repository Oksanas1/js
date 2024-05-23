const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

/*
 * @param {object[]} tasksList
 * @return {undefined}
 */

/* alg
 * take tag veare you put your to do
 * create new tag for list
 * if to do item is done item of list must have extra class
 * create new checkbox inside item of list
 * checkbox must by checked if to do item is done
 * use new tags for everyone of tasks to create element
 * sort list of item is done
 * append tags to site
 */
export const createNewListItemElement = isDone => {
  const listItemElement = document.createElement('li');
  listItemElement.classList.add('list__item');
  if (isDone) {
    listItemElement.classList.add('list__item_done');
  }

  return listItemElement;
};

export const createNewCheckboxElement = isDone => {
  const checkboxElement = document.createElement('input');
  checkboxElement.classList.add('list__item-checkbox');
  checkboxElement.setAttribute('type', 'checkbox');
  if (isDone) {
    checkboxElement.setAttribute('checked', isDone);
  }

  return checkboxElement;
};

export const renderTasks = tasksList => {
  const listElement = document.querySelector('.list');

  const listItemElement = tasksList
    .sort((currentItem, nextItem) => currentItem.done - nextItem.done)
    .map(({ text, done }) => {
      const itemElement = createNewListItemElement(done);
      itemElement.append(createNewCheckboxElement(done), text);

      return itemElement;
    });

  listElement.append(...listItemElement);
};

renderTasks(tasks);
