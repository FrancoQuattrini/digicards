const User = require("../models/User")

const userControllers = {
   perfil: (req, res) => {
      res.render("perfil", {
         title: "Perfil",
      })
   },

   signUp: (req, res) => {
      res.render("signup", {
         title: "Crear cuenta",
         error: null,
      })
   },

   logIn: (req, res) => {
      res.render("login", {
         title: "Ingresar",
      })
   },

   crearCuenta: async (req, res) => {
      const { nombre, apellido, email, password, picture } = req.body
      let nuevoUsuario = new User({
         nombre,
         apellido,
         email,
         password,
         picture,
      })
      try {
         await nuevoUsuario.save()
         res.redirect("/login")
      } catch (error) {
         res.render("signup", {
            title: "Crear cuenta",
            error: error,
         })
      }
   },
}

module.exports = userControllers
