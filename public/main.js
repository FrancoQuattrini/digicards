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
                           <h5 class="card-title fw-bold text-center">${digimon.name}</h5>
                           <p class="card-text text-center">
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
      src: "https://i.postimg.cc/q7z2mQYN/Emblema-Amistad.png",
   },
   {
      name: "Emblema Amor",
      src: "https://i.postimg.cc/hjmTnvKg/Emblema-Amor.png",
   },
   {
      name: "Emblema Bondad",
      src: "https://i.postimg.cc/d3mC7f7x/Emblema-Bondad.png",
   },
   {
      name: "Emblema Conocimiento",
      src: "https://i.postimg.cc/brjbwPvn/Emblema-Conocimiento.png",
   },
   {
      name: "Emblema Esperanza",
      src: "https://i.postimg.cc/CKXk9kTm/Emblema-Esperanza.png",
   },
   {
      name: "Emblema Inocencia",
      src: "https://i.postimg.cc/bYQkFZ69/Emblema-Inocencia.png",
   },
   {
      name: "Emblema Luz",
      src: "https://i.postimg.cc/PryZTBnL/Emblema-Luz.png",
   },
   {
      name: "Emblema Sinceridad",
      src: "https://i.postimg.cc/VLmnyzpQ/Emblema-Sinceridad.png",
   },
   {
      name: "Emblema Valor",
      src: "https://i.postimg.cc/P5Fw8YxT/Emblema-Valor.png",
   },
]

const personajes = [
   {
      name: "Hikari",
      src: "https://i.postimg.cc/VkVq33b0/Hikari.png",
   },
   {
      name: "Joe",
      src: "https://i.postimg.cc/XJMwvdLV/Joe.png",
   },
   {
      name: "Izumi",
      src: "https://i.postimg.cc/qq4ysrWS/Izumi.png",
   },
   {
      name: "Mimi",
      src: "https://i.postimg.cc/PqvWh2m3/Mimi.png",
   },
   {
      name: "Sora",
      src: "https://i.postimg.cc/ZnH3jgSR/Sora.png",
   },
   {
      name: "Taichi",
      src: "https://i.postimg.cc/c1BQsKnS/Taichi.png",
   },
   {
      name: "Takeru",
      src: "https://i.postimg.cc/pXVKy2fn/Takeru.png",
   },
   {
      name: "Yamato",
      src: "https://i.postimg.cc/Y91QL0DQ/Yamato.png",
   },
]

let selectDigivice = document.querySelector("#digivice")
let selectEmblema = document.querySelector("#emblema")
let selectPersonaje = document.querySelector("#personaje")

const mostrarSelects = (contenido, select) => {
   contenido.forEach((data) => {
      let option = document.createElement("option")
      select.appendChild(option)
      option.innerText = data.name
      option.value = data.src
   })
}

if (document.title.includes("Card")) {
   mostrarSelects(digivices, selectDigivice)
   mostrarSelects(emblemas, selectEmblema)
   mostrarSelects(personajes, selectPersonaje)
}

let divDigivices = document.querySelector("#cardsDigivices")
let divEmblemas = document.querySelector("#cardsEmblemas")
let divPersonajes = document.querySelector("#cardsPersonajes")

const galeria = (contenido, includ, divChoise) => {
   contenido.forEach((data) => {
      if (document.title.includes(includ)) {
         let div = document.createElement("div")
         divChoise.appendChild(div)
         div.classList.add("col-3", "py-3", "d-flex", "justify-content-center")
         div.innerHTML = `
                     <div class="card" style="width: 18rem">
                        <img
                           src=${data.src}
                         class="card-img-top"
                           alt="..."
                        />
                        <div class="card-body">
                           <h5 class="card-title fw-bold text-center">${data.name}</h5>
                        </div>
                     </div>
                  `
      }
   })
}

galeria(digivices, "Digivices", divDigivices)
galeria(emblemas, "Emblemas", divEmblemas)
galeria(personajes, "Personajes", divPersonajes)
