//arrays destructuring

let fruits = ["apple","pineapple","banana"]
let [aa,b,c] = fruits
console.log(aa,b,c);

//object destructuring

let user = {username: "herb", age: 23}
let {username,age} = user
console.log(username,age)

//spread operator

let person = {name: "herb", age:23}
let country = "mx"

let data = {...person, country}
console.log(data)

//rest

function sum(num, ...values){
    console.log(values)
    console.log(num + values[0])
    console.log(num + values)
}

sum(1, 2,3,4)

//spread con jsons

 function solution(json1, json2) {
    let {age,color} = json2
    let res = { ...json1, age,color}
  return console.log(res)
  }

  solution({
    name: "Mr. Michi",
    food: "Pescado"
  },{
    age: 12,
    color: "Blanco"
  })

   function solution2(json1,json2){
    return {...json1,...json2,};
  }

 console.log( solution2({
    name: "Mr. Michi",
    food: "Pescado",
  },
  {
    age: 12,
    color: "Blanco",
  }))