document.getElementById('addTask').onclick = function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim(); 
    
    if(taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete ಥ_ಥ';
        deleteButton.className = 'deleteBtn';
        deleteButton.onclick = function() {
            li.remove(); 
        };
        li.appendChild(deleteButton);
        document.getElementById('taskList').appendChild(li);
        taskInput.value = '';
        taskInput.focus();
    }
    else {
        alert('Please enter a task (ノಠ益ಠ)ノ彡┻━┻');
        return;
    }
};
document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('addTask').click();
    }
});

document.getElementById('clearAll').onclick = function() {
    const taskList = document.getElementById('taskList');
    if (taskList.children.length === 0) {
        alert('There are no tasks to clear ಠ~ಠ');
        return;
    }
    document.getElementById('taskList').innerHTML = '';
};
