import getData from "./ex1-api.js"

const solution = async()=>{
    return await getData()
}

solution([{
    movie: "El despertar de los michis",
    year: 2021,
    protagonist: "Mr. Michi"
}, {
    movie: "101 Michis",
    year: 2019,
    protagonist: "Tommy Michiguire"
}]);