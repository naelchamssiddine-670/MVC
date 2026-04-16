/**
 * le Fichier accueilRoute.js a pour mission de créer les routes de la page d'accueil.
 * ejs
 */

// J'importe le package expressjs
const express = require("express");

// J'initialise une application expressjs
const router = express.Router();

// J'importe le fichier accueilController.js
const accueilController = require("../controllers/accueilController");

// Maintenant, je trace ma route en utilisant router

// La route pour l'accueil, exemple localhost:3000/
router.get("/", accueilController.accueilView);


// J'importe le fichier routes.js
module.exports = router;