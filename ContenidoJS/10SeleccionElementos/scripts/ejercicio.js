import{validString,validPromedio} from "./validate.js";
import{agregarEstudiante,paintCard} from "./pintar.js";
const btnAgregar=document.getElementById('btn');
const btnMostrar=document.getElementById('btnMostrar');
btnMostrar.addEventListener("click",()=>{
    paintCard();
});
btnAgregar.addEventListener("click",()=>{
    const nombre=document.getElementById('name').value;
    const apellido=document.getElementById('apellido').value;
    const promedio=document.getElementById('promedio').value;
    const tipo=document.getElementById('tipo').value;
    if(validString(nombre)&&validString(apellido)&&tipo!="0"){
        if (!isNaN(parseFloat(promedio))&&(validPromedio(promedio))){
            console.log('validado');
            agregarEstudiante(nombre,apellido,promedio);
        }else{
            console.log('error en promedio');
            modalAlert("error en dato promedio");
        }
    }else{
        console.log('error en datos');
        modalAlert("error en datos. revisar");
    }
});
const modalAlert=(cadena)=>{
    const divAlert=document.createElement('div');
    const textAlert=document.createElement('p');
    //propiedades de elementos
    divAlert.setAttribute("id","alert");
    divAlert.setAttribute("class","alerta");
    textAlert.setAttribute("class","textAlerta");
    textAlert.innerHTML=`${cadena}`;
    divAlert.appendChild(textAlert);
    document.body.appendChild(divAlert);
    divAlert.onclick=function(){
        document.getElementById("alert").remove();
    };
}