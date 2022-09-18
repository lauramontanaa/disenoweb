'use strict';
//SO ... operador de propagacion
let myArray1=[2,4,6,8,true,3.56,'maria',800,'2'];//cambiar a let
let myArray2=new Array('a','e','i','o','u');//new objetos
myArray1.push(300,677);
//let result=myArray1.concat(myArray2);
myArray1=[...myArray1,...myArray2,78,82772];
console.log(...myArray1);
function print(param1,param2=0,...param3){
    console.log(`esto es una impresion de parametros: ${param1} ${param2} ${param3}`);
}
//invocacion
print(...myArray1);

