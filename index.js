const express = require("express");
const server = express();

const projects = require("./projects/project-router.js");
const resources = require("./resources/resource-router.js");
const tasks = require("./tasks/task-router.js");

server.use(express.json());
server.use("/api/projects", projects);
server.use("/api/resources", resources);
server.use("/api/tasks", tasks);

const PORT = 8000;
server.listen(PORT, () => console.log(`Server is Running on port http://localhost:${PORT}`));