const {readFileSync, writeFileSync, readFile, writeFile} = require('fs');

// Callback - Quand l'action est complete tu envoies un callback
// Cela permet de ne pas bloquer les autres fonctions du programme
console.log('start');
readFile('./content/first.txt','utf8',(err,result) => {
    if(err){
        console.log(err);
        return;
    }
    // fonction pour lire un fichier
    //console.log(result);

    // fonction pour lire un fichier avec un callback,
    // appel d'une seconde fonction en meme temps que la premiere
    // Malgre l'erreur qu'on obtient en resultat le fichier est ecrit,
    // Le fichier n'est pas bloque malgre les erreurs que l'on peut avoir

    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
    const second = result;
    // fonction ecriture
    writeFile('./content/result-async.txt',
    `Here the result: ${first}, ' lulu ', ${second} `,
    (err,result)=>{
        if(err){
            console.log(err);
            return;
        }
    console.log('done with this task');
    }
 )

    })
});
console.log('starting with new task');








/**
 * 
 * Node. js, being an asynchronous platform, 
 * doesn't wait around for things like file I/O to finish 
 * - Node. js uses callbacks. A callback is a function called at the completion of a given task;
 *  this prevents any blocking, and allows other code to be run in the meantime.
 * 
 * What is Callback?
Callback is an asynchronous equivalent for a function.
A callback function is called at the completion of a given task.
Node makes heavy use of callbacks. 
All the APIs of Node are written in such a way that they support callbacks.

For example,
 a function to read a file may start reading file and return the control
 to the execution environment immediately so that the next instruction
can be executed. Once file I/O is complete, it will call the callback
function while passing the callback function,
the content of the file as a parameter.
So there is no blocking or wait for File I/O.
This makes Node.js highly scalable,
as it can process a high number of requests without waiting
for any function to return results.
 * 
 */