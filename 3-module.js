// CommonJS, every file is module(by default)
// Modules - Encapsulated Code (onlye share minimum)

// Module requis pour collecter les donnees
//Variable pour recuperer l'objet du module 4-names
const names = require('./4-names');
const sayHi = require('./5-utils');
const newPerson = require('./6-alternative-flavor-export');
require('./7-mind-grenade');
//console.log(newPerson);

// connnaitre l'information dans l'objet "names"
// console.log(names);


sayHi('susan');
// Recherche la variable john et peter, or celles ci sont contenues dans "names"
//sayHi(john);
//sayHi(peter);

// Appel de la variable "john" et "peter" contenu dans l'objet "names"
sayHi(names.john);
sayHi(names.peter);