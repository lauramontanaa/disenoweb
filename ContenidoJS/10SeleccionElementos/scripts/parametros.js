let cont1=3;
let cont2=cont1;
//console.log(cont1,cont2);
cont1=10;
//console.log(cont1,cont2);
/**
 * por referencia
 */
let planeta={
    nombre:"marte"
}
let otroPlaneta=planeta;
console.log(otroPlaneta,planeta);
planeta.nombre="tierra";
console.log(otroPlaneta,planeta);
//para copiar objetos se hace clonando