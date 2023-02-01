const regex = /(\d{4})-(\d{2})-(\d{2})/
const matchers = regex.exec("2022-01-01")
//verifica si el regex es correcto mediante el string mandado como param
console.table(matchers)