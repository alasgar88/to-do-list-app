export const addTaskToLocalStorage = (task) => {
  localStorage.setItem("task", JSON.stringify(task));
};

export const removTaskFromLocalStorage = () => {
  localStorage.removeItem("task");
};

export const getTaskFromLocalStorage = () => {
  const result = localStorage.getItem("task");
  const task = result ? JSON.parse(result) : [];
  return task;
};
