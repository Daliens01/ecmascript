const anotherFunction = ()=>{
    return new Promise((resolve,reject)=>{
        if(false){
            resolve("se pinches pudo")
        }else{
            reject("no se pudo, la neta")
        }
    })
}

anotherFunction().then(response => console.log(response))
.catch(err=>console.log(err))