const express = require("express")
const router = express.Router()
const digiControllers = require("../controllers/digiControllers")
const userControllers = require("../controllers/userControllers")

router.route("/").get(digiControllers.home)
router.route("/digimons").get(digiControllers.digimons)
router
   .route("/signup")
   .get(userControllers.signUp)
   .post(userControllers.crearCuenta)
router
   .route("/login")
   .get(userControllers.logIn)
   .post(userControllers.ingresarCuenta)
router.route("/logout").get(userControllers.logOut)
router.route("/card").get(digiControllers.card).post(digiControllers.crearCard)
router.route("/mycards").get(digiControllers.mycards)
router.route("/borrar-card/:_id").get(digiControllers.borrarCard)
router.route("/editar-card/:_id").get(digiControllers.editarCard)

module.exports = router
