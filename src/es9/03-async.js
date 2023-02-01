async function* generator(){
    yield await Promise.resolve(1)
    yield await Promise.resolve(2)
    yield await Promise.resolve(3)
}

const other = generator()
other.next().then(res=> console.log(res.value))
other.next().then(res=> console.log(res.value))
other.next().then(res=> console.log(res.value))
console.log("-----");

async function arrNames(arr){
    for await(let value of arr){
        console.log(value);
    }
}

const names = arrNames(["herb","rulo","ponchio"])
console.log("-----");