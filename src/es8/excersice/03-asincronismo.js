const fnAsync = () =>{
    return new Promise((res,rej)=>{
        (true)?setTimeout(() => { res("async!!")}, 2000)
        :rej(new Error("error"))
    })
}

const anotherFn = async()=>{
    const t = await fnAsync()
    console.log(t);
    console.log("terminado");
}
console.log("before");
anotherFn()
console.log("after");