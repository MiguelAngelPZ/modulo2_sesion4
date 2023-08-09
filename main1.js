//Objetos
const persona = {
    nombre: "Pedro",
    edad: 31,
    profesion: "Programador",
    hobbies: ["baloncesto", "música", "dormir"]
}

const persona2 = {
    nombre: "Pedro",
    edad: 31,
    profesion: "Programador",
    hobbies: ["baloncesto", "música", "dormir"],
    trabajar: function ocupacion(){
        alert("Estoy trabajando")
    }
}

// console: persona2.trabajar()
console.log(persona2.nombre);
console.log(persona2["nombre"]);
