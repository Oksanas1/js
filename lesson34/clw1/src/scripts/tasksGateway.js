const baseUrl = 'https://666441d2932baf9032aa81f9.mockapi.io/api/v1/tasks';

const mapTasks = tasks => tasks.map(({ _id, ...rest}) => ({ id: _id, ...rest }));

export function getTasksList() {
  return fetch(baseUrl)
    .then(response => response.json())
    .then(tasks => mapTasks(tasks))
    .then(tasks => tasks
      .sort((a, b) => a.done - b.done));
}

export function getTaskById(taskId) {
  return fetch(`${baseUrl}/${taskId}`)
    .then(response => response.json());
}

export function createTaskInBase(taskData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  });
}

export function deleteTaskInBase(taskId) {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
}

export function updateTaskInBase(taskId, taskData) {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  });
}
