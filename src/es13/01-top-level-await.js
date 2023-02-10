import fetch from "node-fetch";

const response = await fetch(`https://api.escuelajs.co/api/v1/products`)
const recive = await response.json()

export {recive}
//top level await es el consumo de una api