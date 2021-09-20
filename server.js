const express = require("express")
const router = require("./routes/index")
const session = require("express-session")
const mongo = require("connect-mongodb-session")(session)
require("dotenv").config()
const myStore = new mongo({
   uri: process.env.MONGODB,
   collection: "sessions",
})

require("./config/database")

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
const urlControllers = require("./controllers/urlControllers")
app.use("/", urlControllers.checkUrl, router)

const PORT = process.env.PORT || 4000
const HOST = process.env.MYHOST || "0.0.0.0"

app.listen(PORT, HOST, () => console.log("Server listening"))
