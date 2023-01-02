// Objetos

// const alumna = {
//     nombre: "Pilar Figueroa",
//     edad: 26,
//     profesion: "Frontend Dev",
//     escuela: "Ada ITW"
// }

// console.log(alumna.nombre)
// console.log(alumna.edad)
// console.log(alumna["profesion"])

// Object.keys

// const propiedades = Object.keys(alumna)

// for (const propiedad of propiedades) {
//     console.log(alumna[propiedad])
// }

// Cambiando valores de una propiedad de un objeto

// alumna.edad = 27

const estudiantes = [
    {
      edad: 17,
      familiar: "Salamandra",
      casa: "Hufflepuff",
      nombreCompleto: {
        nombre: "Ellis",
        apellido: "Reeves",
      },
      hechizoPreferido: "Expecto Patronum"
    },
    {
      edad: 15,
      familiar: "Salamandra",
      casa: "Gryffindor",
      nombreCompleto: {
        nombre: "Neal",
        apellido: "Spence",
      },
      hechizoPreferido: "Lumos"
    },
    {
      edad: 17,
      familiar: "Sapo",
      casa: "Slytherin",
      nombreCompleto: {
        nombre: "Lucy",
        apellido: "Talley",
      },
      hechizoPreferido: "Expelliarmus"
    },
    {
      edad: 21,
      familiar: "Lechuza",
      casa: "Slytherin",
      nombreCompleto: {
        nombre: "Gloria",
        apellido: "Woods",
      },
      hechizoPreferido: "Lumos"
    },
    {
      edad: 20,
      familiar: "Sapo",
      casa: "Gryffindor",
      nombreCompleto: {
        nombre: "Sharp",
        apellido: "Collier",
      },
      hechizoPreferido: "Lumos"
    }
]

// Metodos arrays => .filter .map .some .every .find
// No mutan el array original

// Filter => recorre el mismo array y devuelve la informacion acorde a una condicion

const alumnosDeSlytherin = estudiantes.filter((estudiante) => estudiante.casa === "Slytherin")
// console.log(estudiantes)
// console.log(alumnosDeSlytherin)

const filtrarPorCasa = (nombreCasa) => {
    return estudiantes.filter(estudiante => estudiante.casa === nombreCasa)
}

// console.log(filtrarPorCasa("Gryffindor"))
// console.log(filtrarPorCasa("Hufflepuff"))
// console.log(filtrarPorCasa("Ravenclaw"))

// Map => Devuelve un array nuevo y devuelve los valores con una modificacion
// Quiero agregar una propiedad nueva a TODOS los elementos

const estudiantesModificados = estudiantes.map(estudiante => { 
    estudiante.escuela = "Hogwarts" 
    return estudiante
})
// console.log(estudiantesModificados)

const numeros = [10, 25, -4, 85, 99, 24]
const dobles = numeros.map(numero => {
    if (numero > 50) {
        return numero * 2
    }
    return numero
})

// console.log(dobles)

// .some => retorna un booleano si hay al menos un caso

const hayNegativos = numeros.some((numero) => numero < 0)
// console.log(hayNegativos)

// .every => retorna un booleano si TODOS cumplen con una condicion

const sonTodosPositivos = numeros.every(num => num > 0)
// console.log(sonTodosPositivos)

// .find => devuelve el primer elemento que coincida con una condicion

const estudianteConLumos = estudiantes.find(estudiante => estudiante.hechizoPreferido === "Lumos")
// console.log(estudianteConLumos)

// Destructuring
const alumna = {
    nombre: "Pilar Figueroa",
    edad: 26,
    profesion: "Frontend Dev",
    escuela: "Ada ITW"
}

const { nombre, edad, profesion, escuela } = alumna

// console.log(estado)

// for (const { hechizoPreferido } of estudiantes) {
//     console.log(hechizoPreferido)
// }

// const mostrarHechizoPreferido = ({ hechizoPreferido }) => {
//     console.log(hechizoPreferido)
// }

// mostrarHechizoPreferido(estudiantes[0])

// Spread operator => copia una variable

let copiaAlumna = {...alumna, edad: 27, anioDeEgreso: 2021}

console.log(copiaAlumna)