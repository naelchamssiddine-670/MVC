/**
 * le fichier myserver.js a pour mission de créer un serveur de l'application.
 */

// J'importe le package http
const http = require("http");

// J'importe le fichier app.js
const app = require("./app");

// Je crée le serveur
const server = http.createServer(app);

// Je déclare le port
const PORT = process.env.PORT || 3001;

// Je démarre le serveur
server.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});