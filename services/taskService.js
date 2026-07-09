const taskModel = require("../models/taskModel");

function getAllTasks() {
    return taskModel.getAllTasks();
}

function createTask(taskData) {
    return taskModel.createTask(taskData);
}

module.exports = {
    getAllTasks
};