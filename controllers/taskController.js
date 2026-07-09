const taskService = require("../services/taskService");

function getAllTasks(req, res) {
    const tasks = taskService.getAllTasks();

    res.json(tasks);
}

module.exports = {
    getAllTasks
};