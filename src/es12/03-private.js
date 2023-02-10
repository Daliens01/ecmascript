class User {
    constructor(nombre){
        this.nombre = nombre
    }
    #speak(){
        return `i am ${this.nombre} and i am ${this.age()} old`
    }
    age(){
        return 23
    }
    get #GetNombre(){
        return this.nombre
    }
    set #SetNombre(name){
        this.nombre = name
    }
}
//determinamos con un "#" que tal metodo es privado dentro de la clase
const user1 = new User("pablo")

user1.SetNombre = "heberto"

console.log(user1.GetNombre);