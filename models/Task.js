const { DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");

const TaskSchema = sequelize.define(
  "tasks",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  { timestamp: false }
);

module.exports = TaskSchema;