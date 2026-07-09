const express = require("express");

const app = express();

// Root route
app.get("/", (req, res) => {
    res.send("Welcome to the Raven API");
});

// Tasks Route
app.get("/tasks", (req, res) => {
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

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});