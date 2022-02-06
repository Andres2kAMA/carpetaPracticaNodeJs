const express = require("express");
const app = express();

const hello_routes = require("./routes/hello");
const task_routes = require("./routes/task");

app.use("/api", hello_routes);
app.use("/api", task_routes);

module.exports = app;
