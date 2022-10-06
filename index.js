//Traer la dependencia del

import {sumar, restar} from './sumar.js'
import materias from './materias.js'

//1. Recorrido de arreglo: forEach
materias.forEach((materia) => {
    if(materia.profesor === 'Cristian Buitrago'){
        console.log(`Materia: ${materia.name}`)
        console.log(`Notas: ${materia.notas}`)
    }
})

//2. Convertir a un arreglo de profesores
let profesores = materias.map(function(materia){
    return materia.profesor
})
console.log(profesores)

//3. Agregar una materia al arreglo de materias, push()
materias.push(
    {
        id:4,
        name: "Cultura Fisica",
        profesor: 'Luis Baquero',
        notas: [
            2,
            3.5
        ]
    }
)
console.log(materias)

//4. Busqueda en arreglos, find
const PHP = materias.find(function(materia){
    return materia.profesor === 'Cristian Buitrago'
})

console.log(PHP)


//Desestructuración:
//let {first_name, last_name, id} = estudiantes 

//console.log(`Nombre estudiante: ${first_name}`)
//console.log(`Apellido estudiante: ${last_name}`)
//console.log(`Id estudiante: ${id}`)

//Variables de tipo let
//let a = 10
//Constantes de tipo const
//const b = 29

//console.log(`Suma de a+b:${ sumar(a , b) }`)
//console.log(`Resta de a-b${ restar(a , b) }`)