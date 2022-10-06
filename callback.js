function imprimir ( c ) {
    console.log(c)
}

//Callback: Funcion a ejecutar dentro de sumar
function sumar(a , b , callback){
    callback(a + b)
}

let resultado=0;

//Ejecutar: Llamar a sumar
sumar(7, 8, imprimir(resultado))