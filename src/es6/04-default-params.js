function newUser(name, age){
    var name = name || "herb"
    var age = age || 23
    console.log(`${name} ${age}`);
}

newUser()
//ecs 6
function newAdmin (name = "herb", age = 23){
console.log(name, age)
}

newAdmin()