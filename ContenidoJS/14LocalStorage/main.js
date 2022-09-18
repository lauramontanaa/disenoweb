//capturar botones
const btnRojo=document.getElementById('rojo');
const btnMarron=document.getElementById('marron');
const btnAzul=document.getElementById('azul');
const btnBorrar=document.getElementById('borrar');
const fondo=localStorage.getItem('fondo');
//generar eventos a los botones
btnRojo.addEventListener('click',()=>{
    localStorage.setItem('fondo','rojo');
    document.body.style.background=fondo;
    console.log(fondo);
    document.body.style.backgroundColor=fondo;
});
//validar demas botones con css (establecer fondos)
btnMarron.addEventListener('click',()=>{
    localStorage.setItem('fondo','marron');
    localStorage.setItem('nombre','sandra');
});
btnAzul.addEventListener('click',()=>{
    localStorage.setItem('fondo','azul');
});
btnBorrar.addEventListener('click',()=>{
    localStorage.removeItem('fondo');
    localStorage.removeItem('nombre');
});