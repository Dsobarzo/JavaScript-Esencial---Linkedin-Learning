"use strict"

//********************************
//*** Parámetros REST

//la definicion de parametro rest: es cuadno los parametros que recibe la funcion pueden ser mas y no esta difinidos ... se agrega , ...NOMBREDEL PARAMETROS REST
function cocinar(...masIngredientes) {
    console.log('Ingrediente1: ', ingrediente1);
    console.log('Ingrediente2: ', ingrediente2);
    console.log("masIngredientes", masIngredientes);
}

cocinar("Pollo", "Tomate", "Arroz", "Frijoles", "Pescado", "Chile");