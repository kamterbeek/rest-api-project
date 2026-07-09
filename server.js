const express = require("express");

const app = express();

app.use(express.json());

const taskRoutes = require("./routes/taskRoutes");

console.log(taskRoutes);

// Root route
app.get("/", (req, res) => {
    res.send("Welcome Raven API");
});

app.use("/tasks", taskRoutes);

const PORT = 3000;

console.log("🚀 Starting Raven API...");

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});