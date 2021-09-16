const poder = Math.floor(Math.random() * (10000 + 1))
console.log(poder)

fetch("https://digimon-api.vercel.app/api/digimon")
   .then((response) => response.json())
   .then((data) => console.log(data))
