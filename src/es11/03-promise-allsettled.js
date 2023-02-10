const promise1 = new Promise((resolve, reject)=> reject("hola"));
const promise2 = new Promise((resolve, reject)=> resolve("adios"));
const promise3 = new Promise((resolve, reject)=> resolve("hasta pronto"));

Promise.allSettled([promise1,promise2,promise3])
.then(response => console.log(response))
//verifica si todos las promesas fueron concluidas..creo