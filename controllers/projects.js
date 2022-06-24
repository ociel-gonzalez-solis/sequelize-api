const ProjectSchema = require("../models/Project.js");
const TaskSchema = require("../models/Task.js");

const getProjects = async (req, res, next) => {
  try {
    const projects = await ProjectSchema.findAll();
    res.status(200).json({ projects });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getProject = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const project = await ProjectSchema.findOne({
      where: { id },
    });
    if (!project) {
      return res.status(404).json({ message: "Project doesn't exist." });
    }
    res.status(200).json({ project });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createProject = async (req, res, next) => {
  try {
    const newProject = await ProjectSchema.create({ ...req.body });
    res.status(200).json({ newProject });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateProject = async (req, res, next) => {
  try {
    const {
      body: { name, priority, description },
      params: { id },
    } = req;
    const updateProject = await ProjectSchema.findByPk(id);
    updateProject.name = name;
    updateProject.priority = priority;
    updateProject.description = description;
    const result = await updateProject.save();
    res.status(200).json({ result, message: "Updating project" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteProject = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const deletedProject = await ProjectSchema.destroy({
      where: { id },
    });
    res
      .status(200)
      .json({ deletedProject, message: "Project deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getProjectTask = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const task = await TaskSchema.findAll({
      where: { projectId: id },
    });
    if (!task) {
      return res.status(404).json({ message: "Project doesn't exist." });
    }
    res.status(200).json({ task });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProjects,
  getProject,
  createProject,
  deleteProject,
  updateProject,
  getProjectTask,
};