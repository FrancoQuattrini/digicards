const mongoose = require("mongoose")

const cardSchema = new mongoose.Schema({
   nickname: String,
   digivice: String,
   emblema: String,
   personaje: String,
   digimon1: String,
   digimon2: String,
   digimon3: String,
   digimon4: String,
})

const Card = mongoose.model("card", cardSchema)

module.exports = Card
