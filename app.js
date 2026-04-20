/**
 * Le fichier app.js est une application de type expressjs
 */

// J'importe le package expressjs
const express = require("express");

// import myql2
const mysql2 = require("mysql2");

// import express-connection
const mysqlConnection = require("express-myconnection");

// J'importe le fichier routes/accueilRoute.js
const accueilRoute = require("./routes/accueilRoute");

// J'importe le fichier routes/authentificationRoute.js
const authRoute = require("./routes/authentificationRoute");

// J'initialise une application expressjs
const app = express();

app.set("Views", "./views");// Je définis le dossier des vues

app.set("view engine", "ejs");// Je définis le moteur de rendu des vues

app.use(express.static("public"));// Je définis le dossier des fichiers statiques

// configurer la connection à la base de données
const optionConnection = {
    host: "localhost",
    user: "root",
    password: "naelchamssiddine@118",
    port: 3000,
    database: "maygourmet"

};

app.use(mysqlConnection(mysql2, optionConnection, "pool"));// Je configure la connection à la base de données

// J'importe les routes
app.use("/", accueilRoute);

// J'importe le fichier routes/authentificationRoute.js
app.use("/", authRoute);


// J'importe le fichier routes.js
module.exports = app;