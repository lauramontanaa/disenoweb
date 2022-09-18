'use strict';
//objeto literal de js
let myObject={
    nombre:'felix',
    apellidos:'ruiz',
    edad:18,
    genero:'masculino'
}
//console.log(myObject.apellidos);
myObject.apellidos="sosa";
//console.log(myObject);
//iterar objeto
//Object.entries(myObject).forEach((e)=>console.log(e));
//Object.entries(myObject).forEach(([key,value])=>console.log(key,value));
Object.values(myObject).forEach((key)=>console.log(key));