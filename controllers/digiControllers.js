const path = require("path")

const digiControllers = {
   home: (req, res) => {
      res.sendFile(path.join(__dirname, "..", "views/index.html"))
   },

   digimons: (req, res) => {
      res.sendFile(path.join(__dirname, "..", "views/digimons.html"))
   },

   perfil: (req, res) => {
      res.sendFile(path.join(__dirname, "..", "views/perfil.html"))
   },

   signup: (req, res) => {
      res.sendFile(path.join(__dirname, "..", "views/signup.html"))
   },

   login: (req, res) => {
      res.sendFile(path.join(__dirname, "..", "views/login.html"))
   },
}

module.exports = digiControllers
