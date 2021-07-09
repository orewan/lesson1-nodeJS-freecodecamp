// Methode pour lire et ecrire un fichier texte
const {readFileSync, writeFileSync} = require('fs');
console.log('start');
// Lecture du fichier
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

//console.log(first,second);

// ecriture du fichier
// Si le fichier est inexistant, il creer un nouveau fichier
// Si le fichier est existant, il remplace le fichier par celui (reecriture par dessus)
writeFileSync('./content/result-sync.txt',
`here is the result : ${first} +' lala ' + ${second}`,
{ flag: 'a'}
// pour ouvrir un fichier il faut un autre argument "flag"
// Le fichier est ouvert et le text est ajoute sans le remplacer
// Open file for appending. The file is created if it does not exist.
// Ouvrir le fichier pour l'ajouter. Le fichier est créé s'il n'existe pas.
);

console.log('done with this task');
console.log('starting the next one');

