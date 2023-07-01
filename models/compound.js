const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Compound = sequelize.define(
  "compound",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    CompoundName: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    CompoundDescription: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    strImageSource: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    strImageAttribution: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    dateModified: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Compound;
