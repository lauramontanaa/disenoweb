'use strict';
/**
 * contenedores

var var1=23;//ambito global
let var2=12;//ambito local
const IVA_1=19;
var var1="hola mundo";
//let var2=23;
console.log(var1);
if(true){
    var var1=false;
}
console.log(var1); */
//suma de dos numeros
let num1;
let num2;
let suma;
suma=0;
//convertir de cadenas a numeros con parse
num1=parseFloat(prompt("introduzca un numero"));
num2=prompt("introduzca un numero");
suma=num1+parseFloat(num2);
console.info("la suma es: "+suma);
alert("la suma es: "+suma);//resultado por pantalla

/**
 * EJERCICIOS
*/

// 1. Dado n cantidad de números, determinar cantidad de números pares e impares
/**
 * let cantNumPar;
let cantNumImpar;
let cantNum;
let numero;
cantNumPar=0;
cantNumImpar=0;
cantNum=parseInt(prompt("¿Cuántos números desea introducir?"));
for(let i=0;i<cantNum;i++){
    numero=parseFloat(prompt("Introduzca un número"));
    if(numero%2==0){
        cantNumPar++;
    }
    else{
        cantNumImpar++;
    }
}
alert("La cantidad de números pares es: "+cantNumPar);
alert("La cantidad de números impares es: "+cantNumImpar);
*/

// 2. Sumar dos números
/**
 * let numero1;
let numero2;
let suma;
suma=0;
numero1=parseFloat(prompt("Introduzca un número")); //Cambiar la cadena a número con parse
numero2=prompt("Introduzca un número");
suma=numero1+parseFloat(numero2);
console.info("La suma es: "+suma);
alert("La suma es: "+suma);
*/

// 3. Multiplicar dos números pares
/**
 * let numero1;
let numero2;
let multiplicacion;
multiplicacion=1;
numero1=parseFloat(prompt("Introduzca un número"));
numero2=parseFloat(prompt("Introduzca un número"));
if(numero1%2==0){
    if(numero2%2==0){
        multiplicacion=numero1*numero2;
        alert("La multiplicación es: "+multiplicacion);
    }
}
*/