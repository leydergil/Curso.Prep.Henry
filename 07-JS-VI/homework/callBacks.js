// Uso de CallBacks, es decir una funcion que llama a otra funcion dentro de sus parametros.

var lista=["a","b","c","d","e","f",1,2,3,4,5,6,7,8,9,0];

lista.forEach(function(e, i){
    console.log(e);
    console.log(i)
}) 

lista.forEach(e => console.log(e)); // otra forma de iterar con el forEach