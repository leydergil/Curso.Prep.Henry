function tablaDelSeis(){
    //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
    //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
    //Escribe tu código aquí   
    let tablaSeis = [];
    const number = 6;
    for(let i=0; i<=10; i++){
      tablaSeis[i] = number * i;
    }
    return tablaSeis;
  }

console.log (tablaDelSeis());

var numero = 3 ;
var cont = 0;
if(numero === 1 || numero === 0){
    console.log("False");
}else{
    for(let i=1; i<=numero; i++){
        console.log(i);
        if(numero % i === 0){
            cont = cont + 1;
            console.log(cont);
        }
    }
    if(cont <= 2){
        console.log("Primo")
    }else{
        console.log("No Primo");
    }
}
