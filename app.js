const express = require("express");
const projectsRoutes = require("./routes/projectsRoutes.js");
const taskRoutes = require("./routes/taskRoutes.js");

require("dotenv").config();

//Security packages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

// Swagger
const swaggerUI = require("swagger-ui-express");
const YAML = require('yamljs');
const swaggerDocument = YAML.load("./swagger.yaml");

const app = express();
app.set("trust proxy", 1);

// extra packages
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 60 * 1000, //15min
    max: 100, // limit each IP to 100req per windowMs.
  })
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

app.get("/", (req, res, next) => {
  res.send('<h1>Sequelize Api</h1><a href="/sequelize-docs">Documentation</a>');
});

app.use("/sequelize-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use("/api/v1/", projectsRoutes);
app.use("/api/v1/", taskRoutes);

module.exports = app;

