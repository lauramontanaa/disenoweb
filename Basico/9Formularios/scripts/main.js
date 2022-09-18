'use strict';
const btn=document.getElementById('boton2');
btn.addEventListener('click',(e)=>{//2do parametro funcion tipo flecha anonima
    event.preventDefault();
    const form=document.getElementById('form');
    console.log(form);
    console.log(form[0].value);
});