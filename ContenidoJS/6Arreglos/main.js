'use strict';
//declaracion de arreglos
const myArray1=[2,4,6,8,true,3.56,'maria',800,'2'];
let myArray2=new Array('a','e','i','o','u');//new objetos
//console.log(myArray1[6]);//posicion
//console.log(myArray2[3]);
/**iteracion de arreglos
 * for in, for of, foreach
*/
for(let i of myArray1){//contenido
    //console.log(i);
}
for(let j in myArray1){//indices
    //console.log(j);
    //console.log(myArray1[j]);//valores
}
for(let k=0;k<myArray1.length;k++){//tamaño
    //console.log(myArray1[k]);
}
myArray2.forEach(e=>{//parametro funcion anonima tipo flecha (elemento)
    console.log(e);
});