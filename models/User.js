const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
   nombre: String,
   apellido: String,
   email: String,
   password: String,
   picture: String,
})

const User = mongoose.model("user", userSchema)
module.exports = User
