const anotherFunction = ()=>{
    return new Promise((resolve,reject)=>{
        if(true){
            resolve("se pinches pudo")
        }else{
            reject("no se pudo, la neta")
        }
    })
}

anotherFunction().then(response => console.log(response))
.catch(err=>console.log(err)).finally(console.log("por fin termino"))
//ponemos un finally para saber que la promesa porfin termino