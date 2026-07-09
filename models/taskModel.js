const tasks = require("../data/tasks.json");

function getAllTasks() {
    return tasks;
}

module.exports = {
    getAllTasks
};