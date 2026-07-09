const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
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
});

module.exports = router; 