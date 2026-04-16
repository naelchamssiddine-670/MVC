/**
 * le fichier myserver.js a pour mission de créer un serveur de l'application.
 */

// J'importe le package http
const http = require("http");


// J'importe le fichier app.js
const app = require("./app");


// Je déclare une variable app qui importe le fichier app.js
const server = http.createServer(app);

// Je déclare une variable numeroPort qui contient le numéro de port sur lequel le serveur va écouter
const numeroPort = 3000;

// Je lance le serveur sur le port 3000
server.listen(numeroPort, () => {
    console.log(`Le serveur est à l'écoute sur le port ${numeroPort}`);
});