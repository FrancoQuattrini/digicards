const express = require("express")
const router = express.Router()
const digiControllers = require("../controllers/digiControllers")

router.route("/").get(digiControllers.home)
router.route("/digimons").get(digiControllers.digimons)
router.route("/perfil").get(digiControllers.perfil)
router.route("/signup").get(digiControllers.signup)
router.route("/login").get(digiControllers.login)

module.exports = router
