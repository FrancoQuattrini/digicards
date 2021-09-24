const Card = require("../models/Card")

const digiControllers = {
   home: (req, res) => {
      res.render("index", {
         title: "Home",
         logueado: req.session.logueado,
         nombre: req.session.nombre || "",
         picture: req.session.picture || "",
         userId: req.session.userId || "",
      })
   },

   unauthorized: (req, res) => {
      res.render("unauthorized", {
         title: "Unauthorized",
         logueado: req.session.logueado,
         nombre: req.session.nombre || "",
         picture: req.session.picture || "",
         userId: req.session.userId || "",
      })
   },

   digimons: (req, res) => {
      res.render("digimons", {
         title: "Digimons",
         logueado: req.session.logueado,
         nombre: req.session.nombre || "",
         picture: req.session.picture || "",
         userId: req.session.userId || "",
      })
   },

   digivices: (req, res) => {
      res.render("digivices", {
         title: "Digivices",
         logueado: req.session.logueado,
         nombre: req.session.nombre || "",
         picture: req.session.picture || "",
         userId: req.session.userId || "",
      })
   },

   emblemas: (req, res) => {
      res.render("emblemas", {
         title: "Emblemas",
         logueado: req.session.logueado,
         nombre: req.session.nombre || "",
         picture: req.session.picture || "",
         userId: req.session.userId || "",
      })
   },

   personajes: (req, res) => {
      res.render("personajes", {
         title: "Personajes",
         logueado: req.session.logueado,
         nombre: req.session.nombre || "",
         picture: req.session.picture || "",
         userId: req.session.userId || "",
      })
   },

   card: (req, res) => {
      if (req.session.logueado) {
         res.render("card", {
            title: "Card",
            logueado: req.session.logueado,
            nombre: req.session.nombre || "",
            picture: req.session.picture || "",
            userId: req.session.userId || "",
            error: null,
            edit: false,
         })
      }
   },

   mycards: async (req, res) => {
      if (req.session.logueado) {
         const cards = await Card.findAll({ userId: req.session.userId })
         return res.render("mycards", {
            title: "MC",
            logueado: req.session.logueado,
            nombre: req.session.nombre || "",
            picture: req.session.picture || "",
            userId: req.session.userId || "",
            cards,
         })
      }
      res.redirect("/unauthorized")
   },

   crearCard: async (req, res) => {
      const {
         nickname,
         digivice,
         emblema,
         personaje,
         digimon1,
         digimon2,
         digimon3,
         digimon4,
         id,
      } = req.body

      let nuevaCard

      if (!id) {
         nuevaCard = await Card.create({
            nickname,
            digivice,
            emblema,
            personaje,
            digimon1,
            digimon2,
            digimon3,
            digimon4,
            logueado: req.session.logueado,
            nombre: req.session.nombre || "",
            picture: req.session.picture || "",
            userId: req.params._id || "",
         })
      } else {
         nuevaCard = await Card.findByPk(id)
         nuevaCard.nickname = nickname
         nuevaCard.digivice = digivice
         nuevaCard.emblema = emblema
         nuevaCard.personaje = personaje
         nuevaCard.digimon1 = digimon1
         nuevaCard.digimon2 = digimon2
         nuevaCard.digimon3 = digimon3
         nuevaCard.digimon4 = digimon4
         nuevaCard.userId = req.params.id
      }
      try {
         await nuevaCard.save()
         res.redirect("/mycards")
      } catch (error) {
         res.render("card", {
            title: "Card",
            logueado: req.session.logueado,
            nombre: req.session.nombre || "",
            picture: req.session.picture || "",
            userId: req.session.userId || "",
            error,
         })
      }
   },

   editarCard: async (req, res) => {
      let editedCard = await Card.findByPk(req.params.id)
      res.render("card", {
         title: "Editar Card",
         logueado: req.session.logueado,
         nombre: req.session.nombre || "",
         picture: req.session.picture || "",
         userId: req.session.userId || "",
         error: null,
         edit: editedCard,
      })
   },

   borrarCard: async (req, res) => {
      await Card.destroy({
         where: {
            id: req.params.id,
         },
      })
      res.redirect("/mycards")
   },
}

module.exports = digiControllers
