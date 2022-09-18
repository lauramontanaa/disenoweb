class DataApi{
    //atributos, metodos -> constructores
    //metodo constructor
    constructor(){
        this.infoCompleta=[];
        this.url="https://jsonplaceholder.typicode.com/todos";
        this.data=[];
        this.getApi();
    }
    getInfoCompleta(){
        return this.infoCompleta;
    }
    getData(){
        return this.data;
    }
    async getApi(){
        this.data=await fetch(this.url)
            .then((response)=>response.json())
            .then((info)=>{
                for(let i of info){
                    this.data.push(i.title);
                    //console.log(data);
                    /*let cad= `Id: ${id.userId} titulo: ${i.title} completado: ${i.completed}`;
                    this.infoCompleta.push(cad);*/
                }
                //console.log(this.data);
                return this.data;
            })
            .catch((error)=>console.error(error))
            .finally(console.info("ha finalizado la peticion"))
    };
}
export{DataApi};