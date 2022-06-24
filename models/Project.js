const sequelize = require("../database/database");
const { DataTypes } = require("sequelize");
const TaskSchema = require("./Task.js");

const ProjectSchema = sequelize.define(
  "projects",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    priority: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  { timestamp: false }
);

ProjectSchema.hasMany(TaskSchema, {
  foreignKey: "projectId",
  sourceKey: "id",
});

TaskSchema.belongsTo(ProjectSchema, {
  foreignKey: "projectId",
  targetId: "id",
});

module.exports = ProjectSchema;