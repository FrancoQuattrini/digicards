const User = require("../models/User")
const bcryptjs = require("bcryptjs")

const userControllers = {
   signUp: (req, res) => {
      if (!req.session.logueado) {
         res.render("signup", {
            title: "Crear cuenta",
            logueado: req.session.logueado,
            nombre: req.session.nombre || "",
            picture: req.session.picture || "",
            userId: req.session.userId || "",
            error: null,
         })
      } else {
         res.redirect("/")
      }
   },

   logIn: (req, res) => {
      if (!req.session.logueado) {
         res.render("login", {
            title: "Ingresar",
            logueado: req.session.logueado,
            nombre: req.session.nombre || "",
            picture: req.session.picture || "",
            userId: req.session.userId || "",
            error: null,
         })
      } else {
         res.redirect("/")
      }
   },

   logOut: (req, res) => {
      req.session.destroy(() => {
         res.redirect("/")
      })
   },

   crearCuenta: async (req, res) => {
      const { nombre, apellido, email, password, picture } = req.body
      const hashedPassword = bcryptjs.hashSync(password, 10)
      try {
         let usuario = await User.findOne({
            where: {
               email,
            },
         })
         if (usuario)
            throw new Error("Este email ya esta en uso padre, proba con otro")
         let nuevoUsuario = await User.create({
            nombre,
            apellido,
            email,
            password: hashedPassword,
            picture,
         })
         req.session.logueado = true
         req.session.nombre = nuevoUsuario.nombre
         req.session.picture = nuevoUsuario.picture
         req.session.userId = nuevoUsuario.id
         res.render("index", {
            title: "Home",
            logueado: req.session.logueado,
            nombre: req.session.nombre || "",
            picture: req.session.picture || "",
            userId: req.session.userId || "",
         })
      } catch (error) {
         res.render("signup", {
            title: "Crear cuenta",
            logueado: req.session.logueado,
            nombre: req.session.nombre || "",
            picture: req.session.picture || "",
            userId: req.session.userId || "",
            error: error.message,
         })
      }
   },

   ingresarCuenta: async (req, res) => {
      const { email, password } = req.body
      try {
         let usuario = await User.findOne({
            raw: true,
            where: {
               email,
            },
         })
         if (!usuario) throw new Error("Usuario y/o contraseña incorrecto/a")
         let passwordCompare = bcryptjs.compareSync(password, usuario.password)
         if (!passwordCompare)
            throw new Error("Usuario y/o contraseña incorrecto/a")
         req.session.logueado = true
         req.session.nombre = usuario.nombre
         req.session.picture = usuario.picture
         req.session.userId = usuario.id
         res.render("index", {
            title: "Home",
            logueado: req.session.logueado,
            nombre: req.session.nombre || "",
            picture: req.session.picture || "",
            userId: req.session.userId || "",
         })
      } catch (error) {
         res.render("login", {
            title: "Ingresar",
            logueado: req.session.logueado,
            nombre: req.session.nombre || "",
            picture: req.session.picture || "",
            userId: req.session.userId || "",
            error: error.message,
         })
      }
   },
}

module.exports = userControllers
