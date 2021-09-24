const Sequelize = require("sequelize")

const db = new Sequelize("digicards", "root", "", {
   host: "localhost",
   dialect: "mysql",
})

module.exports = db
