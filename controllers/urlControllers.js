const urlControllers = {
   checkUrl: (req, res, next) => {
      if (
         req.url.startsWith("/card/") ||
         req.url.startsWith("/borrar-card/") ||
         req.url.startsWith("/editar-card/")
      ) {
         next()
      } else {
         let validURL = [
            "/",
            "/digimons",
            "/digivices",
            "/emblemas",
            "/personajes",
            "/signup",
            "/login",
            "/logout",
            "/mycards",
            "/unauthorized",
         ]
         validURL.includes(req.url) ? next() : res.redirect("/")
      }
   },
}

module.exports = urlControllers
