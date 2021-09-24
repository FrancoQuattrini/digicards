const Sequelize = require("sequelize")
const db = require("../config/database")

const Card = db.define("card", {
   id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   nickname: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   digivice: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   emblema: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   personaje: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   digimon1: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   digimon2: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   digimon3: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   digimon4: {
      type: Sequelize.STRING,
      allowNull: false,
   },
})

module.exports = Card
