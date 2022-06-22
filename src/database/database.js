import Sequelize from "sequelize";

export const sequelize = new Sequelize("projectsdb", "postgres", "350480", {
  host: "localhost",
  dialect: "postgres",
});
