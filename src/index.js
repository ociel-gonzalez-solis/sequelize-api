import app from "./app.js";
import { sequelize } from "./database/database.js";

const start = async () => {
  try {
    await sequelize.sync({force: false});

    app.listen(3000);
    console.log("Server listening on port ", 3000);
  } catch (error) {
    console.log("Unable to connect to the database", error);
  }
};

start();
