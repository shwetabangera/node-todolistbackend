//all end points for to do list
const express = require("express");
const { getAllTasks, createTask } = require("../controllers/taskController");
const router = express.Router();
router.route("/tasks").get(getAllTasks).post(createTask);
router.route("/tasks/:id").get(getAllTasks).patch(createTask).delete();
module.exports = router;
