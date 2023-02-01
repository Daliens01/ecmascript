class User {
    constructor(nombre){
        this.nombre = nombre
    }
    speak(){
        return `i am ${this.nombre} and i am ${this.age()} old`
    }
    age(){
        return 23
    }
}

const user1 = new User("pablo")

console.log(user1.speak());