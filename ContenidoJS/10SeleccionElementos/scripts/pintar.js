import{validAprobar} from "./validate.js";
const arrayEstudiantes=[];
const agregarEstudiante=(name,lastName,avg)=>{
    let student={
        nombre:name,
        apellido:lastName,
        promedio:avg
    }
    arrayEstudiantes.push;
    console.log(arrayEstudiantes);
}
const paintCard=()=>{
    /**
     * fragment: mini dom
     */
    const fragment=document.createDocumentFragment();
    const temEstudiante=document.querySelector("#templateEstudiante").content;
    const cardsEstudiantes=document.querySelector("#cardsEstudiantes");
    for(let i of arrayEstudiantes){
        console.log(i);
        const cloneTemEstudiante=temEstudiante.cloneNode(true);
        cloneTemEstudiante.querySelector(".title-card").innerHTML="<strong>datos de la persona</strong>";
        cloneTemEstudiante.querySelector(".data-card").innerHTML=`nombre:${i.nombre} apellido:${i.apellido}`;
        cloneTemEstudiante.querySelector(".test-promedio").innerHTML=`promedio:${i.promedio}`;
        cloneTemEstudiante.querySelector(".test-aprobado").innerHTML=`:${validAprobar(i.promedio)}`;
        fragment.appendChild(cloneTemEstudiante);
    }
    cardsEstudiantes.appendChild(fragment);
};
export{agregarEstudiante,paintCard};