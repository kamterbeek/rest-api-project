const taskService = require("../services/taskService");

function getAllTasks(req, res) {
    const tasks = taskService.getAllTasks();

    res.json(tasks);
}

function createTask(req, res) {
    const newTask = taskService.createTask(req.body);

    res.status(201).json(newTask);
}

module.export = {
    getAllTasks,
    createTask
};
