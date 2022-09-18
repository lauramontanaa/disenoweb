'use strict';
let cadJSON={"nombres":"juan andres"};
//[] -> arreglo, {} -> objeto

let datos=[
    {
        "nombres":"juan andres",
        "apellidos":"vargas solano",
        "edad":34,
        "materias":["logica","programacion","matematicas"],
        "soltero":true
    },
    {
        "nombres":"mario andres",
        "apellidos":"marquez",
        "edad":19,
        "materias":["logica","programacion","matematicas"],
        "soltero":true
    }
]

Object.entries(datos).forEach((e)=>console.log(e));