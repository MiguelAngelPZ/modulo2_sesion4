const alumnos = [
    {
      nombre: "Maria",
      edad: 12,
      grado: "6",
      grupo: "A",
      materias: ["Matematicas", "Español", "Ciencias"],
      extracurricular: ["futbol"]
    },
    {
      nombre: "Celeste",
      edad: 10,
      grado: "4",
      grupo: "C",
      materias: ["Matematicas", "Español"],
      extracurricular: ["baloncesto"]
    },
    {
      nombre: "Javier",
      edad: 11,
      grado: "5",
      grupo: "A",
      materias: ["Matematicas", "Ciencias"],
      extracurricular: ["futbol", "remo"]
    },
    {
      nombre: "Mario",
      edad: 7,
      grado: "3",
      grupo: "A",
      materias: ["Matematicas", "Español", "Ciencias", "Caligrafia"],
      extracurricular: ["Besibol"]
    },
    {
      nombre: "Irene",
      edad: 10,
      grado: "4",
      grupo: "A",
      materias: ["Español", "Ciencias"],
      extracurricular: ["gimnasia"]
    },
  ]
  
  const rubro = "materias";
  const valor = "Matematicas";
  const resultados = []
  
  for(let i = 0; i < alumnos.length; i++) {
    if (rubro === "materias" || rubro === "extracurricular") {
      if (alumnos[i][rubro].includes(valor)) {
        resultados.push(alumnos[i])
      }
    } else {
      if (alumnos[i][rubro] === valor) {
        resultados.push(alumnos[i])
      }
    }
  }
  
  console.log("resultados", resultados)