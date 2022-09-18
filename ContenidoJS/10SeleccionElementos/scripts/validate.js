const validString=(value)=>{
    //ternario
    let result=(value.length>=3)?true:false;
    return result;
};
const validPromedio=(nota)=>{
    let result=(nota>=3 && nota<=5)?true:false;
    return result;
};
const validAprobar=(promedio)=>{
    let result=(promedio>=3 && promedio<=5)?"aprobado":"reprobado";
    return result;
};
export {validString,validPromedio,validAprobar};