const form = document.getElementById('form');
const btn=document.getElementById('btnDatos');
const names=document.getElementById('inputNames');
const age=document.getElementById('inputAge');
const email=document.getElementById('inputEmail');
const city=document.getElementById('inputCity');
const policy=document.getElementById('checkPolitica');

//Control de validación

const objectValid={
    nombres:false,
    edad:false,
    correo:false,
    ciudad:false,
    politica:false
};

//Validar formulario completo
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(validForm()===-1){
        alert('Enviando el formulario');
    }else{
        alert('Error en valores del formulario');
    }
});

const validForm=()=>{
    const values=Object.values(objectValid);
    let response=values.findIndex(e=>e===false);
    return response;
}

names.addEventListener('change',(e)=>{
    console.log(e.target.value);
    const namesRegex = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    //Ternario
    objectValid.nombres = e.target.value.match(namesRegex)?true:false;
    console.log(Object.values(objectValid));
});

age.addEventListener('change',function(e){
    const ageRegex=/(^[0-9]{1,2}$)/g;
    if((age.value.match(ageRegex))&&((parseInt(age.value))>=18)){
        objectValid.age=true;
    }else{
        objectValid.age=false;
    }
    console.log(Object.values(objectValid));
});

policy.addEventListener('change',function(e){
    objectValid.politica=e.target.checked===true?true:false;
    console.log(Object.values(objectValid));
});

//validar email y ciudad