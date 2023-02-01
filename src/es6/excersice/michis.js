function* getId(){
  while(true){
yield Math.random()
  }
}

console.log(getId().next());

//generar id's diferentes uno de los otros

//Al poner un while true, decimos que este se va a recorrer infinitas veces
//pero al pausar lo regresado dentro del while con YIELD, cada vez
//que llamamos la funcion, tendremos control del infinito de while