// reduce devuelve un unico valor
// es decir que con reduce podemos sumar, restar, multiplicar, dividir o hacer operaciones
// con todos los elementos elementos del arreglo y devuelven un unico valor como resultado de esaas operaciones. 

var lista = [1,2,2,3,4,5,6,7,8,9]

//Sumar Array
var sumaArray = lista.reduce(function(sum, element){
    return sum + element;
},0); // el cero (0) representa el valor con el que el acumulador va a empezar, es decir como si asignaramos cero (0) a sum.

console.log(sumaArray);


//Multiplicar Array
var multiplocarArray = lista.reduce(function(mult, element){
    return mult * element;
},1);// el uno (1) representa que el contador (mult) inicia en uno (1) para poder multiplicar.

console.log(multiplocarArray);

//Dividir Array
var multiplocarArray = lista.reduce(function(div, element){
    return div / element;
},);// el uno (1) representa que el contador (mult) inicia en uno (1) para poder multiplicar.

console.log(multiplocarArray)