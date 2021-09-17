const digimons = []
fetch("https://digimon-api.vercel.app/api/digimon")
   .then((res) => res.json())
   .then((json) => {
      const digimons = [...json]
      console.log(digimons)
   })
   .catch((err) => console.error(err.message))
