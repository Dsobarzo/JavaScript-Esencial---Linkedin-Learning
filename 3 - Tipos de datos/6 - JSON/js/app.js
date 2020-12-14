"use strict"

// JSON => JavaScript Object Notation
// formato de cambio de datos

var persona = {nombre: 'Sergio', twitter: 'yacafx'};

var personas = [
    {nombre: 'Hugo', twitter: 'dcHugo'},
    {nombre: 'Paco', twitter: 'dcPaco'},
    {nombre: 'Luis', twitter: 'dcLuis'},
    //se añade var persona al objeto personas
    persona
]

//convertir datos con el objeto JSON (cadena de texto)
var personaJSON = JSON.stringify(persona);

//recuerar de JSON con el metodo parse a un objeto
var nuevaPersona = JSON.parse(personaJSON)
