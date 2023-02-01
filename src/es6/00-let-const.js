//anteriores variables
var lastName = "herb";
lastName = "heberto";

let fruit = "apple"
fruit = "kiwi"

const animal = "dog";
//no se puede reasignar un valor constante a diferencia de una variable como var 
//o let
// animal = "cat"
console.log(animal);


const fruits = () =>{
    if(true){
        var f1 = "apple" //el scope si lo mostrará afuera del bloque
        let f2 = "pineapple" // el scope no mostrara nada fuera del bloque
        const f3 = "watermelon" // el scope no mostrara nada fuera del bloque
    }
    
    console.log(f1+" "+f2+" "+f3);
}

