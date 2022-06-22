import { TaskSchema } from "../models/Task.js";

export const getTasks = async (req, res, next) => {
  try {
    const tasks = await TaskSchema.findAll();
    res.status(200).json({ tasks });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTask = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const task = await TaskSchema.findOne({
      where: { id },
      attributes: ["name"],
    });
    if (!task) {
      return res.status(404).json({ message: "Project doesn't exist." });
    }
    res.status(200).json({ task });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res, next) => {
  try {
    const newTask = await TaskSchema.create({ ...req.body });
    res.status(200).json({ newTask });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const {
      body: { name, done, projectId },
      params: { id },
    } = req;
    const updateTask = await TaskSchema.findOne({
      where: { id },
    });
    updateTask.set(req.body);
    const result = await updateTask.save();
    res.status(200).json({ result, message: "Updating Task" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const deletedTask = await TaskSchema.destroy({
      where: { id },
    });
    res
      .status(200)
      .json({ deletedTask, message: "Project deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
