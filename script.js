// Get DOM elements
const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const deadlineInput = document.getElementById('deadline-input');
const taskList = document.getElementById('task-list');

// Add task on button click
addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  const deadline = deadlineInput.value;

  if (taskText === '') return;

  // Create task item
  const li = document.createElement('li');
  li.className = 'task-item';

  // Create task content container
  const taskDetails = document.createElement('div');
  taskDetails.className = 'task-details';

  // Task text
  const taskSpan = document.createElement('span');
  taskSpan.className = 'task-text';
  taskSpan.textContent = taskText;

  // Deadline text
  const deadlineSpan = document.createElement('span');
  deadlineSpan.className = 'deadline';
  deadlineSpan.textContent = deadline ? `Due: ${deadline}` : 'No deadline';

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = () => li.remove();

  // Assemble task item
  taskDetails.appendChild(taskSpan);
  taskDetails.appendChild(deadlineSpan);
  li.appendChild(taskDetails);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Clear inputs
  taskInput.value = '';
  deadlineInput.value = '';
});
