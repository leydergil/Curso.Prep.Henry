/// map devuelve un arreglo
// con el resultado que retorna la ejecución de la funcion
// del callback
var lista = [1,2,3,4,5,6]

var agregarLetra = lista.map(function(x, i){
    return x + "b";
})

console.log(agregarLetra);
console.log(agregarLetra[3]);

var nombre = "leyder";

var mayus = nombre.charAt(0).toUpperCase();
console.log(mayus);