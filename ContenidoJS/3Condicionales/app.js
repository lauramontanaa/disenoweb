'use strict';
let num3=55;
let num4=12;
if(num3>num4){
    console.log("num3 es mayor que num4")//si es una sola linea no es necesaria la llave
}else{
    if(num3%5===0){
        console.log("multiplo de 5")
    }
}
//condicional ternario, ? true, : false
let respuesta=(num4>=10)?"num4 es mayor que 10":"num4 no es mayor que 10";
//console.log(respuesta);
//switch
let opcion=2;
switch(opcion){
    case 1: 
        console.log("opcion1");
        break;
    case 2: 
        console.log("opcion2");
        break;
    case 3:
        console.log("opcion3");
        break;
    case 4:
        console.log("opcion4");
        break;
    default://no siempre es necesario
        console.log("opcion fuera de rango");//no es necesario break
}
switch(true){
    case opcion>=0 && opcion<3: //rango
        console.log("aplazado");
        break;
    case opcion>=3 && opcion<=5: 
        console.log("aprobado");
        break;
    case opcion>5:
        console.log("fuera de rango");
        break;
}

