const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Loadroutes
const taskRoutes = require("./routes/taskRoutes");

// Debugging
console.log("Loading routes from:", require.resolve("./routes/taskRoutes"));
console.log(
  taskRoutes.stack.map(layer => ({
    path: layer.route?.path,
    methods: layer.route?.methods
  }))
);

// Root route
app.get("/", (req, res) => {
    res.send("Welcome to the Raven API");
});

// Mount task routes
app.use("/tasks", taskRoutes);

// Start server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
