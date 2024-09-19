document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('task-list');
    
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const completedButton = document.createElement('button');
    completedButton.textContent = 'Concluído';
    completedButton.classList.add('completed-btn');
    completedButton.addEventListener('click', function() {
        listItem.classList.toggle('completed');  
    });

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(completedButton);
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);
}
