/**
 * Le fichier app.js est une application de type expressjs
 */

// J'importe le package expressjs
const express = require("express");

// J'importe le fichier routes/accueilRoute.js
const accueilRoute = require("./routes/accueilRoute");

// J'importe le fichier routes/authentificationRoute.js
const authRoute = require("./routes/authentificationRoute");

// J'initialise une application expressjs
const app = express();

app.set("Views", "./views");// Je définis le dossier des vues

app.set("view engine", "ejs");// Je définis le moteur de rendu des vues

// J'importe les routes
app.use("/", accueilRoute);

// J'importe le fichier routes/authentificationRoute.js
app.use("/", authRoute);


// J'importe le fichier routes.js
module.exports = app;