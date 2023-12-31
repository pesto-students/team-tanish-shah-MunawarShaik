const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

let tasks = [];
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Middleware for validating task input
const validateTaskInput = (req, res, next) => {
  const { title, description } = req.body;

  if (!title || typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({ error: "Title is required." });
  }

  if (description && typeof description !== "string") {
    return res.status(400).json({ error: "Description must be a string." });
  }

  next();
};

// Get all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Add a new task
app.post("/tasks", validateTaskInput, (req, res) => {
  const newTask = req.body;
  newTask.id = Date.now().toString(); // Assign a simple timestamp-based ID
  tasks.push(newTask);
  res.status(201).json(newTask); // 201 Created
});

// Update a task
app.put("/tasks/:taskId", validateTaskInput, (req, res) => {
  const taskId = req.params.taskId;
  const updatedTask = req.body;

  tasks = tasks.map((task) =>
    task.id === taskId ? { ...task, ...updatedTask, id: taskId } : task
  );

  res.json(updatedTask);
});

// Delete a task
app.delete("/tasks/:taskId", (req, res) => {
  const taskId = req.params.taskId;
  tasks = tasks.filter((task) => task.id !== taskId);
  res.sendStatus(204); // No Content
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
