const express = require("express")
const router = require("./routes/index")
const session = require("express-session")
const SequelizeStore = require("connect-session-sequelize")(session.Store)
const urlControllers = require("./controllers/urlControllers")
const db = require("./config/database")
require("dotenv").config()
const User = require("./models/User")
const Card = require("./models/Card")

const myStore = new SequelizeStore({
   db,
})

const app = express()

app.use(express.static("public"))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))

app.use(
   session({
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: false,
      store: myStore,
   })
)

Card.belongsTo(User)
User.hasMany(Card)

db.sync().then(() => {
   app.use("/", urlControllers.checkUrl, router)
   app.listen(4000, () => console.log("Server listening"))
})
