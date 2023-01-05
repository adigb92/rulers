import Task from "./Task.js";
import TasksManager from "./TasksManager.js";

let manager = new TasksManager();


showTasksInUl();

function showTasksInUl() {
    document.getElementById("completedTask").innerHTML = "";
    document.getElementById("ActiveTask").innerHTML = "";
    for (let task of manager.tasksArr) {
        if (task.completed == true) {
            document.getElementById("completedTask").innerHTML += `<li class="list-group-item fa-sharp fa-solid fa-check"> ${task.get("description")}</li> <button disabled="disabled" class="btn btn-success" onclick="moveTaskToCompleted(${task.get("id")})"><i class="fa-sharp fa-solid fa-check"></i></button> <button disabled="disabled" class="btn btn-primary"><i onclick="updateTaskInPrompt(${task.get("id")})" class=" fa-solid fa-pen-to-square"></i></button> <button disabled="disabled" class="btn btn-danger"><i onclick = "deleteTaskInConfirm(${task.get("id")})" class="fa-regular fa-trash-can"></i></button>`;
        }
        else {
            document.getElementById("ActiveTask").innerHTML += `<li class="list-group-item"> ${task.get("description")}</li> <button class="btn btn-success" onclick="moveTaskToCompleted(${task.get("id")})"><i class="fa-sharp fa-solid fa-check"></i></button> <button class="btn btn-primary"><i onclick="updateTaskInPrompt(${task.get("id")})" class=" fa-solid fa-pen-to-square"></i></button> <button class="btn btn-danger"><i onclick = "deleteTaskInConfirm(${task.get("id")})" class="fa-regular fa-trash-can"></i></button>`;
        }

    }
}


window.addNewTask = function addNewTask() {
    let taskInput = document.getElementById("taskInput").value;
    manager.addTask(new Task(taskInput));
    showTasksInUl();
    document.getElementById("taskInput").value = "";
};

window.updateTaskInPrompt = function updateTaskInPrompt(id) {
    let newDescription = prompt("Enter new description:");
    if (newDescription == "" || newDescription == null) {
        alert("Error");
    }
    else {
        manager.editTaskDescription(id, newDescription);
        showTasksInUl();
    }
};


window.deleteTaskInConfirm = function deleteTaskInConfirm(id) {
    if (confirm("are you sure?")) {
        manager.deleteTask(id);
        showTasksInUl();
    }
};

window.moveTaskToCompleted = function moveTaskToCompleted(id) {
    manager.moveToCompleted(id);
    showTasksInUl();
};









