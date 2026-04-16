/**
* Le fichier authentificationRoute.js a pour 
* mission de tracer les routes pour :
* enregistrer ou créer un compte utilisateur
* se connecter à un compte utilisateur
*/


// J'importe le package expressjs
const express = require("express");
// J'importe le fichier authentificationController.js
const authentifiactionController = require("../controllers/authentificationController");
// J'initialise une application expressjs
const router = express.Router();
// Maintenant, je trace mes routes en utilisant router
router.get("/register", authentifiactionController.registerView);
// La route pour se connecter, exemple localhost:3000/login
module.exports = router;