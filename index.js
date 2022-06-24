const app = require('./app');
const sequelize = require("./database/database");

require("dotenv").config();

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await sequelize.sync({ force: false });

    app.listen(port);
    console.log("Server listening on port ", port);
  } catch (error) {
    console.log("Unable to connect to the database", error);
  }
};

start();
