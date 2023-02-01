function* iterate([arr]){
   for (let value of arr) {
    yield value
   }
}

const it = iterate(['herb','oscar','david'])

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);