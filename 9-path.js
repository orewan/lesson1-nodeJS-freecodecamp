const path = require('path');

console.log(path.sep);

// Afficher un  chemin vers un fichier
const filePath = path.join('/content', 'subFolder', 'test.txt');
console.log(filePath);

// Utilisation de basenqme pour retourner uniquement le fichier a la fin du chemin des dossiers
// The path.basename() method returns the last portion of a path, similar to the Unix basename command. Trailing directory separators are ignored, see path.sep.

const baseName = path.basename(filePath);
console.log(baseName);



// Affiche le chemin absolue depuis le disque dur
const absolute = path.resolve(__dirname,'content', 'subFolder', 'test.txt')
console.log(absolute);