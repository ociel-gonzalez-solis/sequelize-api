const express = require("express");
const router = express.Router();

const {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  getProject,
  getProjectTask,
} = require("../controllers/projects.js");

router.route("/projects").get(getProjects).post(createProject);
router
  .route("/projects/:id")
  .put(updateProject)
  .delete(deleteProject)
  .get(getProject);

router.route("/projects/:id/tasks").get(getProjectTask);

module.exports = router;