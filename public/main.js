const digimons = []
fetch("https://digimon-api.vercel.app/api/digimon")
   .then((res) => res.json())
   .then((json) => {
      const digimons = [...json]
      mostrarDigi(digimons)
   })
   .catch((err) => console.error(err.message))

let divPadre = document.querySelector("#cardsDigimons")
let selectDigimon1 = document.querySelector("#selectDigimon1")
let selectDigimon2 = document.querySelector("#selectDigimon2")
let selectDigimon3 = document.querySelector("#selectDigimon3")
let selectDigimon4 = document.querySelector("#selectDigimon4")

const mostrarDigi = (digimons) => {
   digimons.forEach((digimon) => {
      if (document.title.includes("Digimons")) {
         let div = document.createElement("div")
         divPadre.appendChild(div)
         div.classList.add("col-3", "py-3", "d-flex", "justify-content-center")
         div.innerHTML = `
                     <div class="card" style="width: 18rem">
                        <img
                           src=${digimon.img}
                         class="card-img-top"
                           alt="..."
                        />
                        <div class="card-body">
                           <h5 class="card-title fw-bold">${digimon.name}</h5>
                           <p class="card-text">
                              <span class="fw-bold">LEVEL: </span>${digimon.level}
                           </p>
                        </div>
                     </div>
                  `
      } else if (document.title.includes("Card")) {
         const crearOptions = (select) => {
            let option = document.createElement("option")
            select.appendChild(option)
            option.innerText = digimon.name
            option.value = digimon.img
         }
         crearOptions(selectDigimon1)
         crearOptions(selectDigimon2)
         crearOptions(selectDigimon3)
         crearOptions(selectDigimon4)
      }
   })
}

const digivices = [
   {
      name: "Digivice Neutro",
      src: "https://i.postimg.cc/9X6SwQnZ/digivice-Neutro.png",
   },
   {
      name: "Digivice Azul",
      src: "https://i.postimg.cc/T3qZ6vQm/digivice-Azul.png",
   },
   {
      name: "Digivice Gris",
      src: "https://i.postimg.cc/0Nkh5XH4/digivice-Gris.png",
   },
   {
      name: "Digivice Naranja",
      src: "https://i.postimg.cc/RhHDpkNW/digivice-Naranja.png",
   },
   {
      name: "Digivice Rojo",
      src: "https://i.postimg.cc/bwjKWw0p/digivice-Rojo.png",
   },
   {
      name: "Digivice Rosa",
      src: "https://i.postimg.cc/3R6qB8JM/digivice-Rosa.png",
   },
   {
      name: "Digivice Verde",
      src: "https://i.postimg.cc/447q39BX/digivice-Verde.png",
   },
   {
      name: "Digivice Verde 2",
      src: "https://i.postimg.cc/hG26X8kt/digivice-Verde2.png",
   },
   {
      name: "Digivice Violeta",
      src: "https://i.postimg.cc/j5C9PwTQ/digivice-Violeta.png",
   },
]

const emblemas = [
   {
      name: "Emblema Amistad",
      src: "https://i.postimg.cc/vTgzH5sk/emblema-Amistad.png",
   },
   {
      name: "Emblema Amor",
      src: "https://i.postimg.cc/26XGD2Pn/emblema-Amor.png",
   },
   {
      name: "Emblema Bondad",
      src: "https://i.postimg.cc/L6gCHF45/emblema-Bondad.png",
   },
   {
      name: "Emblema Conocimiento",
      src: "https://i.postimg.cc/pLN0rcyZ/emblema-Conocimiento.png",
   },
   {
      name: "Emblema Esperanza",
      src: "https://i.postimg.cc/MG5tsW5P/emblema-Esperanza.png",
   },
   {
      name: "Emblema Inocencia",
      src: "https://i.postimg.cc/nzL2g6wH/emblema-Inocencia.png",
   },
   {
      name: "Emblema Luz",
      src: "https://i.postimg.cc/GpdqJBFT/emblema-Luz.png",
   },
   {
      name: "Emblema Sinceridad",
      src: "https://i.postimg.cc/T3rtDjDX/emblema-Sinceridad.png",
   },
   {
      name: "Emblema Valor",
      src: "https://i.postimg.cc/WzB7Dtp3/emblema-Valor.png",
   },
]

const personajes = [
   {
      name: "Hikari",
      src: "https://i.postimg.cc/V6TQpwLR/Hikari.png",
   },
   {
      name: "Joe",
      src: "https://i.postimg.cc/7LHkTXWg/Joe.png",
   },
   {
      name: "Koshiro",
      src: "https://i.postimg.cc/j5CYM2K2/Koshiro.png",
   },
   {
      name: "Mimi",
      src: "https://i.postimg.cc/7PGf6Y7q/Mimi.png",
   },
   {
      name: "Sora",
      src: "https://i.postimg.cc/WzkLPydP/Sora.png",
   },
   {
      name: "Taichi",
      src: "https://i.postimg.cc/G9n03jDT/Taichi.png",
   },
   {
      name: "Takeru",
      src: "https://i.postimg.cc/DwdhZRBv/Takeru.png",
   },
   {
      name: "Yamato",
      src: "https://i.postimg.cc/BvmG5DrR/Yamato.png",
   },
]

let selectDigivice = document.querySelector("#digivice")
let selectEmblema = document.querySelector("#emblema")
let selectPersonaje = document.querySelector("#personaje")

// const fullSelects = (array, select) => {
//    array.forEach((data) => {
//       let option = document.createElement("option")
//       select.appendChild(option)
//       option.innerText = data.name
//       option.value = data.src
//    })
// }
// fullSelects(digivices, selectDigivice)

const mostrarDigivices = () => {
   digivices.forEach((digivice) => {
      let option = document.createElement("option")
      selectDigivice.appendChild(option)
      option.innerText = digivice.name
      option.value = digivice.src
   })
}

const mostrarEmblemas = () => {
   emblemas.forEach((emblema) => {
      let option = document.createElement("option")
      selectEmblema.appendChild(option)
      option.innerText = emblema.name
      option.value = emblema.src
   })
}

const mostrarPersonajes = () => {
   personajes.forEach((personaje) => {
      let option = document.createElement("option")
      selectPersonaje.appendChild(option)
      option.innerText = personaje.name
      option.value = personaje.src
   })
}

if (document.title.includes("Card")) {
   mostrarDigivices()
   mostrarEmblemas()
   mostrarPersonajes()
}
