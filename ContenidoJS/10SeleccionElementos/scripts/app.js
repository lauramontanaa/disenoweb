'use strict';
//seleccionar elementos del dom
let myTitle=document.getElementById("titulo");
//seleccionar por el name
let tagName=document.getElementsByName("art1");
//seleccion por etiqueta
let etiqueta=document.getElementsByTagName("h3");
//console.log(etiqueta);
//queryselector id
let queryContainer=document.querySelector("#container");
//queryselector class
let myMenu=document.querySelector(".menu");
//queryselector etiqueta
let myOl=document.querySelector("o1");
//all
let allArt=document.querySelectorAll("article");
//console.log(allArt);
//crear elementos
let miParrafo=document.createElement("p");
miParrafo.id="parrafo";
miParrafo.className="parrafo";
miParrafo.textContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident doloribus beatae exercitationem odio quidem velit numquam culpa, atque dolorem quas suscipit sint dicta ullam delectus dolor consequatur minus hic voluptatibus.";
miParrafo.innerHTML="<h3>esto es otro titulo</h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident doloribus beatae exercitationem odio quidem velit numquam culpa, atque dolorem quas suscipit sint dicta ullam delectus dolor consequatur minus hic voluptatibus. <strong>jvhdvgbgx</strong>";//renderiza, interpreta etiquetas
//insertar elemento en el dom
//document.body.appendChild(miParrafo);
//seleccion elemento
let seccion1=document.getElementById("section1");
seccion1.appendChild(miParrafo);
