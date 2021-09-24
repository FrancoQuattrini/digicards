const Sequelize = require("sequelize")
const db = require("../config/database")

const User = db.define("user", {
   id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   nombre: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   apellido: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
   },
   password: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   picture: {
      type: Sequelize.STRING,
      allowNull: false,
   },
})

module.exports = User
