const API_BASE_URL = "http://localhost:8000"; // Change if deployed elsewhere

// Get all tasks
export const fetchAllTasks = async () => {
  const response = await fetch(`${API_BASE_URL}/tasks/all`);
  if (!response.ok) throw new Error("Failed to fetch tasks");
  return await response.json();
};

// Get a single task by ID
export const fetchTaskById = async (taskId) => {
  const response = await fetch(`${API_BASE_URL}/get-task/${taskId}`);
  if (!response.ok) throw new Error(`Failed to fetch task with ID ${taskId}`);
  return await response.json();
};

// Create a new task
export const createTask = async (task) => {
  const response = await fetch(`${API_BASE_URL}/task`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  if (!response.ok) throw new Error("Failed to create task");
  return await response.json();
};

// Update an existing task
export const updateTask = async (taskId, updatedTask) => {
  const response = await fetch(`${API_BASE_URL}/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTask),
  });
  if (!response.ok) throw new Error(`Failed to update task with ID ${taskId}`);
  return await response.json();
};

// Delete a task
export const deleteTask = async (taskId) => {
  const response = await fetch(`${API_BASE_URL}/task/delete/${taskId}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error(`Failed to delete task with ID ${taskId}`);
  return await response.json();
};

// Test root endpoint (optional)
export const fetchRoot = async () => {
  const response = await fetch(`${API_BASE_URL}/`);
  if (!response.ok) throw new Error("Failed to fetch root");
  return await response.text(); // Root returns plain text
};


const newTask = { title: "New Task", description: "Description here" };
const created = await createTask(newTask);
console.log("Created Task:", created);
