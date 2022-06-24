const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  database: "d67rbddj0jevjf",
  username: "lfyoktkmxumook",
  password: "b3125d2de5c68afa698eec41967e9ef32edb3ed68d49ecabe158fea8ecc91a8b",
  host: "ec2-34-200-35-222.compute-1.amazonaws.com",
  port: 5432,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});


// require("dotenv").config();

// const sequelize = new Sequelize({
//   database: process.env.DATABASE,
//   username: process.env.USERNAME,
//   password: process.env.PASSWORD,
//   host: process.env.HOST,
//   port: process.env.DBPORT,
//   dialect: "postgres",
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//   },
// });

module.exports = sequelize;
