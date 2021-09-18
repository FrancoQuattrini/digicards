// const urlControllers = {
//    checkURL: (req, res, next) => {
//       if (req.url.startsWith("/card/", "/borrar-card/", "/editar-card/")) {
//          next()
//       } else {
//          let validURL = [
//             "/",
//             "/digimons",
//             "/signup",
//             "/login",
//             "/logout",
//             "/mycards",
//             "/unauthorized",
//          ]
//          validURL.includes(req.url) ? next() : res.redirect("/")
//       }
//    },
// }

// module.exports = urlControllers

// const urlControllers = {
//     checkURL: (req, res, next) => {
//         if(req.url.startsWith('/user/remove/')){
//             next()
//         }else{
//             let validURL = ["/", "/register", "/login", "/options", "/roll", "/logout", "/highscores"]
//             validURL.includes(req.url) ? next() : res.redirect('/')

//     }
// }
// module.exports = urlControllers
