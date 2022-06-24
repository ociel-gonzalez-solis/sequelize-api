const express = require("express");
const router = express.Router();

const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
} = require("../controllers/tasks.js");

router.route("/tasks").get(getTasks).post(createTask);
router.route("/tasks/:id").put(updateTask).delete(deleteTask).get(getTask);

module.exports = router;
