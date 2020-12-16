"use strict"

//********************************0
//*** Control de ciclos
// break | continue

var contador = 0 
var cuenta = 0;

for(contador = 0;contador<= 20;contador++) { 
    if(contador == 5){
        //SE AÑADE BREAK PARA ROMPER EL CICLO TERMINA EL CODIGO
        break
    }
   if (contador % 2 == 0) {
       // SE AÑADE CONTINUE PARA SALIR DEL SICLO IGNORA TODO LO QUE SIGUE Y CONTINIA CON EL CODIGO
      continue;
   } 
   cuenta++;
   debugger;
} 

console.log("Hay" + cuenta + " números impares");