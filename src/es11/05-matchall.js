const regex = /\b(Apple)+\b/g
const fruits = "aplle, banana, kiwi, Apple,etc"

for (const match of fruits.matchAll(regex)){
    console.log(match);
}
//checa si algunos caracteres coinciden con un regex