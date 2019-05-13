var tasksList = document.querySelector('.tasks-list');
var input = document.querySelector('.js-input');
var add = document.querySelector('.js-btnAdd');

window.onload = function(){
    input.focus();
}

add.addEventListener('click', addTask);
input.addEventListener('keyup', function(event){
    if (event.keyCode == 13) {
        addTask();
    }
});

function addTask() {
    if (input.value == '') {
        alert('Type some data');
    }
    else if (input.value == ' ') {
        alert('The field must be filled!');
    }
    else {
        let li = document.createElement('li');
        li.className = 'task-item';

        let taskText = document.createElement('div');
        taskText.className = 'task-text';
        taskText.textContent = input.value;
        input.value = '';

        let checkbox = document.createElement('input');
        checkbox.className = 'task-status'
        checkbox.type = 'checkbox';
        checkbox.onchange = function(){
            if (this.checked){
                li.classList.add('completed');
            }
            else {
                li.classList.remove('completed');
            }
        }

        let deleteBtn = document.createElement('div');
        deleteBtn.className = 'task-delete';
        deleteBtn.innerHTML = '&#10008;';
        deleteBtn.onclick = function(){
            li.parentNode.removeChild(li);
        }

        li.append(taskText, checkbox, deleteBtn);
        tasksList.prepend(li);
    }
}