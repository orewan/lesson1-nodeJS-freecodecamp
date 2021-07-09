// Another way to export a module
//********* By Default */
// Exporte une fonction
// module.exports = sayHi;
//******************** */

// Exporte un objet
// Exemple 1 : exporte l'objet tableau items contenant 'item1', et 'item2'
module.exports.items=['item1','item2'];


// Exemple 2:
// person est un objet contenant le 'name' et a pour valeur 'bob'
// le module exporte l'objet singlePerson contenant l'objet person

const person={
    name :'bob',
}

module.exports.singlePerson = person;

