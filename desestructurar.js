let colors = require('colors');

const estudiantes1 = [ "Santiago Gomez", 
                       "Juan Camilo", 
                       "Juan Diego"];

const estudiantes2 = [ "Enrique",
                       "Michael",
                       "Daniela",
                       "Julian"]

//Operador Spred(resto)
const estudiantes3 = [ 'Veronica', 
                       ...estudiantes1, 
                       'Paula',
                       ...estudiantes2 ]


console.log(estudiantes3)


