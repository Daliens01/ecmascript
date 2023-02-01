const arr = [1,2,3,4,23,["herb","rulo",["fernanfloo","lucas"]]]
console.table(arr.flat(3))
//FLAT: checa la profundidad de una matriz de arreglos 

const arr2 = [1,2,3,4,5]
console.log(arr2.flatMap(v=>[v,v*2]));
//FLATMAP: presenta el valor y luego el valor agregado mediante una función