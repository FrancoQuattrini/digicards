const User = require("../models/User")
const bcryptjs = require("bcryptjs")

const userControllers = {
   signUp: (req, res) => {
      res.render("signup", {
         title: "Crear cuenta",
         logueado: req.session.logueado,
         nombre: req.session.nombre || "",
         picture: req.session.picture || "",
         userId: req.session.userId,
         error: null,
      })
   },

   logIn: (req, res) => {
      res.render("login", {
         title: "Ingresar",
         logueado: req.session.logueado,
         nombre: req.session.nombre || "",
         picture: req.session.picture || "",
         userId: req.session.userId,
         error: null,
      })
   },

   logOut: (req, res) => {
      req.session.destroy(() => {
         res.redirect("/")
      })
   },

   crearCuenta: async (req, res) => {
      const { nombre, apellido, email, password, picture } = req.body
      const hashedPassword = bcryptjs.hashSync(password, 10)
      let nuevoUsuario = new User({
         nombre,
         apellido,
         email,
         password: hashedPassword,
         picture,
      })
      try {
         await nuevoUsuario.save()
         req.session.logueado = true
         req.session.nombre = nuevoUsuario.nombre
         req.session.picture = nuevoUsuario.picture
         req.session.userId = nuevoUsuario._id
         res.redirect("/")
      } catch (error) {
         res.render("signup", {
            title: "Crear cuenta",
            logueado: req.session.logueado,
            nombre: req.session.nombre || "",
            picture: req.session.picture || "",
            userId: req.session.userId,
            error: error,
         })
      }
   },

   ingresarCuenta: async (req, res) => {
      const { email, password } = req.body
      let usuario = await User.findOne({ email })
      let passwordCompare = bcryptjs.compareSync(password, usuario.password)
      if (passwordCompare) {
         req.session.logueado = true
         req.session.nombre = usuario.nombre
         req.session.picture = usuario.picture
         req.session.userId = usuario._id
         return res.redirect("/")
      }
      res.render("login", {
         title: "Ingresar",
         logueado: req.session.logueado,
         nombre: req.session.nombre || "",
         picture: req.session.picture || "",
         userId: req.session.userId,
         error: "Usuario y/o contraseña incorrecto/a",
      })
   },
}

module.exports = userControllers
