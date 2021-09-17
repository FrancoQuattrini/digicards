const Card = require("../models/Card")

const digiControllers = {
   home: (req, res) => {
      res.render("index", {
         title: "Home",
         logueado: req.session.logueado,
         nombre: req.session.nombre || "",
         picture: req.session.picture || "",
      })
   },

   digimons: (req, res) => {
      res.render("digimons", {
         title: "Digimons",
         logueado: req.session.logueado,
         nombre: req.session.nombre || "",
         picture: req.session.picture || "",
      })
   },

   card: (req, res) => {
      res.render("card", {
         title: "Card",
         logueado: req.session.logueado,
         nombre: req.session.nombre || "",
         picture: req.session.picture || "",
         error: null,
         edit: false,
      })
   },

   mycards: async (req, res) => {
      if (req.session.logueado) {
         const cards = await Card.find()
         return res.render("mycards", {
            title: "My",
            logueado: req.session.logueado,
            nombre: req.session.nombre || "",
            picture: req.session.picture || "",
            cards,
         })
      }
      res.redirect("/signup")
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
         _id,
      } = req.body

      let nuevaCard

      if (!_id) {
         nuevaCard = new Card({
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
         })
      } else {
         nuevaCard = await Card.findOne({ _id })
         nuevaCard.nickname = nickname
         nuevaCard.digivice = digivice
         nuevaCard.emblema = emblema
         nuevaCard.personaje = personaje
         nuevaCard.digimon1 = digimon1
         nuevaCard.digimon2 = digimon2
         nuevaCard.digimon3 = digimon3
         nuevaCard.digimon4 = digimon4
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
            error,
         })
      }
   },

   editarCard: async (req, res) => {
      let editedCard = await Card.findOne({ _id: req.params._id })
      res.render("card", {
         title: "Editar Card",
         logueado: req.session.logueado,
         nombre: req.session.nombre || "",
         picture: req.session.picture || "",
         error: null,
         edit: editedCard,
      })
   },

   borrarCard: async (req, res) => {
      await Card.findOneAndDelete({ _id: req.params._id })
      res.redirect("/mycards")
   },
}

module.exports = digiControllers
