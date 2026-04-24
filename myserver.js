/**
 * le fichier myserver.js a pour mission de créer un serveur de l'application.
 */

// J'importe le package http
const http = require("http");
// On utilise le module natif HTTP plutot qu'un listen direct sur Express.

// J'importe le fichier app.js
const app = require("./app");
// app contient deja la configuration Express complete.

// Je crée le serveur
const server = http.createServer(app);
// Le serveur HTTP delegue le traitement des requetes a l'application Express.

// Je déclare le port
const PORT = process.env.PORT || 3001;
// La variable d'environnement permet de changer facilement le port en production.

// Je démarre le serveur
server.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
