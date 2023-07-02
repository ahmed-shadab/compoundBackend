const Sequelize = require("sequelize");
require("dotenv").config();
// const sequelize = new Sequelize("compound", "root", "12345", {
//   dialect: "mysql",
//   host: "localhost",
// });
const sequelize = new Sequelize(
  process.env.Database_name,
  process.env.Database_user,
  process.env.Database_password,
  {
    dialect: "mysql",
    host: process.env.Host,
  }
);

module.exports = sequelize;
