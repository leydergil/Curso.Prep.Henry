var lista = ["a", "b", "c", "d", "e"];

// forEach es una funcion de los arreglos
//Tiene como parametros una funcion
//la cual tiene dos (parametros)
//Uno representa el elemento actual y el otreo representa la posición

lista.forEach(function(element, index){
    console.log(element);
    console.log(index);
    console.log (`${index} = (${element})`);
})



/// map devuelve un arreglo
// con el resultado que retorna la ejecución de la funcion
// del callback
var agregarLetra = lista.map(function(x){
    return x + "b";
})

console.log(agregarLetra);
console.log(agregarLetra[3]);