function getAllTasks(req, res) {
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
    
    res.json(tasks);
}

module.exports = {
    getAllTasks
};