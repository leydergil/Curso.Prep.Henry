var lista = ["a", "b", "c", "d", "e"];

// forEach es una funcion de los arreglos
//Tiene como parametros una funcion
//la cual tiene dos (parametros)
//Uno representa el elemento actual y el otreo representa la posición

lista.forEach(function(element, index){
    console.log(element);
    console.log(index);
    console.log (`${index} = (${element})`);
});