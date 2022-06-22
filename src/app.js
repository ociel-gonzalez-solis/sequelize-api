import express from "express";
import projectsRoutes from './routes/projectsRoutes.js';
import taskRoutes from "./routes/taskRoutes.js";

const app = express();
app.use(express.json());

app.use(projectsRoutes);
app.use(taskRoutes);

export default app;
