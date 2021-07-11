
/**
 * Creation d'un serveur de maniere classique et simple
 */
/*
const http = require('http');
const server = http.createServer((req,res)=>{
console.log(req);
// Plusieurs Methode sont disponibles
    res.write('welcome to our home page')
    res.end()
})

// Creation d'un serveur a l'adresse 5000
server.listen(5000);
*/

/**
 * Creation d'un serveur avec ajout de page
 * Solution
 * https://stackoverflow.com/questions/60714212/error-err-stream-write-after-end-write-after-end
 * 
 */
 const http = require('http');


 const server = http.createServer((req,res)=>{
     
     if(req.url === '/'){
         res.write("Welcome to our page")
         res.end()
     }
 
     else if(req.url === '/about'){
         res.write("About us and our history")
         res.end()
     }
     else{
 
     res.write(`
         <h1> Oooops!! Bonjour, tu n'es pas a la bonne page </h1>
         <p> I can't find the page that you are looking for </p>
         <a href="/"> Back to home page </a>
 
     `)
     res.end()
     }
 })
 server.listen(5000)