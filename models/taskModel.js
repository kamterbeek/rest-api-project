const tasks = require("../data/tasks.json");

function getAllTasks() {
    return tasks;
}

module.exports = {
    getAllTasks,
    createTask
};

function createTask(taskData) {
    const newTask = {
        id: tasks.length + 1,
        title: taskData.title,
        completed: false
    };

    tasks.push(newTask);

    return newTask;
}