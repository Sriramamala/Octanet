const todoList = document.getElementById('todo-list');
const priorityList = document.getElementById('priority-list');
const addTodoButton = document.getElementById('add-todo');
const addPriorityButton = document.getElementById('add-priority');

// Function to create a new item with delete button
function createItem(container, buttonText) {
    const item = document.createElement('div');
    item.className = 'todo-item';
    item.innerHTML = `<input type="text" placeholder="${buttonText}">
                      <button class="delete-button">Delete</button>`;
    container.appendChild(item);

    const deleteButton = item.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => {
        container.removeChild(item);
    });
}

addTodoButton.addEventListener('click', () => {
    createItem(todoList, 'To-Do');
});

addPriorityButton.addEventListener('click', () => {
    createItem(priorityList, 'Priority');
});