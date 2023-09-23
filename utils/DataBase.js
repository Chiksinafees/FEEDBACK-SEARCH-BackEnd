const Sequelize = require("sequelize");

const sequelize = new Sequelize("company-feedback", "root", "Nafees@123", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
