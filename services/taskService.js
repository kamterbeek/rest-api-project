function getAllTasks() {
    const tasks = [
        {
            id: 1,
            title: "Learn Express",
            completed: false
        },
        {
            id: 2,
            title: "Build REST API",
            completed: false
        }
    ];

    return tasks;
}

module.exports = {
    getAllTasks
};