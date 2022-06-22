import { Router } from "express";

import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  getProject,
  getProjectTask,
} from "../controllers/projects.js";

const router = Router();

router.route("/projects").get(getProjects).post(createProject);
router
  .route("/projects/:id")
  .put(updateProject)
  .delete(deleteProject)
  .get(getProject);

router.route("/projects/:id/tasks").get(getProjectTask);

export default router;
