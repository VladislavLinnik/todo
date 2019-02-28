'use strict';

window.onload = function(){
    document.querySelector(".js-input").focus();
}

var input = document.querySelector(".js-input"),
    btn = document.querySelector(".js-btnAdd"),
    btnDelete = document.querySelector(".js-btnDelete");

input.addEventListener('blur', inputAdd);
btnDelete.addEventListener('click', deleteTask);

function deleteTask(){
    alert(1);
}
function inputAdd(){
    var val = input.value;
    val.trim();

    if (val != "" && val != " ") {
        var elem = `
        <li class="tasks-item">
            <div class="task-text">${val}</div>
            <div class="task-delete js-btnDelete">&#10008;</div>
        </li>`;
        document.querySelector('.tasks-list').insertAdjacentHTML('afterBegin', elem);
        input.value = "";
    }
}
