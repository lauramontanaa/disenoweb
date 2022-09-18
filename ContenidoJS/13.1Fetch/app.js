import { DataApi } from "./data.js";
//instanciar el objeto, crear objeto
let myData=new DataApi();
const allData=myData.getData();
console.log(allData);
//console.log(myData.getInfoCompleta());
//console.log(myData.infoCompleta);