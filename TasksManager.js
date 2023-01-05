import Task from "./Task.js";

export default class TasksManager {
    constructor() {
        this.tasksArr = [];
    }

    addTask(newTask) {
        this.tasksArr.push(newTask)
    }

    deleteTask(id) {
        this.tasksArr = this.tasksArr.filter((Task) => Task.id != id);
    }

    editTaskDescription(id, newDescription) {
        let taskToUpdate = this.tasksArr.find((Task) => Task.id == id);
        let indexToUpdate = this.tasksArr.indexOf(taskToUpdate);
        this.tasksArr[indexToUpdate].set("description", newDescription);
    }

    moveToCompleted(id) {
        let taskToComplete = this.tasksArr.find((Task) => Task.id == id);
        let indexToComplete = this.tasksArr.indexOf(taskToComplete);
        this.tasksArr[indexToComplete].set("completed", true);

        alert("task has moved to completed tasks");

    }
}




