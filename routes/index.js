const express = require("express")
const router = express.Router()
const digiControllers = require("../controllers/digiControllers")
const userControllers = require("../controllers/userControllers")

router.route("/").get(digiControllers.home)
router.route("/digimons").get(digiControllers.digimons)
router.route("/digivices").get(digiControllers.digivices)
router.route("/emblemas").get(digiControllers.emblemas)
router.route("/personajes").get(digiControllers.personajes)
router
   .route("/signup")
   .get(userControllers.signUp)
   .post(userControllers.crearCuenta)
router
   .route("/login")
   .get(userControllers.logIn)
   .post(userControllers.ingresarCuenta)
router.route("/logout").get(userControllers.logOut)
router
   .route("/card/:_id")
   .get(digiControllers.card)
   .post(digiControllers.crearCard)
router.route("/mycards").get(digiControllers.mycards)
router.route("/borrar-card/:id").get(digiControllers.borrarCard)
router.route("/editar-card/:id").get(digiControllers.editarCard)
router.route("/unauthorized").get(digiControllers.unauthorized)

module.exports = router
