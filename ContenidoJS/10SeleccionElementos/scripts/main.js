'use strict';
//evento en html
function generoEvento(){
    alert('hizo click en el boton');
}
function eventoMouse(){
    console.log('mouse');
}
//evento por propiedad
const btnPropiedad=document.getElementById('btnPropiedad');
btnPropiedad.onclick=function(){
    const nombre=document.getElementById('name').value;
    const apellido=document.getElementById('apellido').value;
    const promedio=document.getElementById('promedio').value;
    const tipo=document.getElementById('tipo').value;
    if(!isNaN(parseFloat(promedio))){
        console.log(promedio);
    }else{
        console.log("invalido")
    }
}
//evento por metodo addEventListener
const inputName=document.getElementById('nombre');
inputName.addEventListener('click',()=>{
    console.log(inputName.value);
});