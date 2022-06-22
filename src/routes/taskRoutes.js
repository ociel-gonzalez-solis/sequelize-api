import { Router } from "express";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
} from "../controllers/tasks.js";

const router = Router();

router.route("/tasks").get(getTasks).post(createTask);
router.route("/tasks/:id").put(updateTask).delete(deleteTask).get(getTask);

export default router;
