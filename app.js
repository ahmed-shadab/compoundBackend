const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./util/database");
const compoundRoutes = require("./routes/compound");

const app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(bodyParser.json());

app.use(compoundRoutes);

sequelize
  .sync()
  .then((result) => {
    app.listen(3000, () => {
      console.log("connected to localhost on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
