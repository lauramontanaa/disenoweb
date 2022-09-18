'use strict';
//funcion clasica
function printingCad(cadena="no pasó parametro"){//parametro por default
    //template string
    //console.log(`esto es una prueba de cadena ${cadena}`);
}
//invocacion
printingCad("estoy pasando parametro");
//funcion tipo flecha
const operacion=(num1,num2)=>{
    let result=Math.pow(num1,num2);
    return result;
}
console.log(operacion(3,2));