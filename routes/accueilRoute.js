/**
 * le Fichier accueilRoute.js a pour mission de créer les routes de la page d'accueil.
 * ejs
 */

// J'importe le package expressjs
const express = require("express");
// Express fournit ici uniquement un routeur dedie a la page d'accueil.

// J'initialise une application expressjs
const router = express.Router();
// Ce routeur sera branche ensuite dans app.js.

// J'importe le fichier accueilController.js
const accueilController = require("../controllers/accueilController");
// Le controleur contient la logique appelee quand la route est visitee.

// Maintenant, je trace ma route en utilisant router

// La route pour l'accueil, exemple localhost:3000/
router.get("/", accueilController.accueilView);
// Une visite sur "/" appelle donc la methode accueilView.


// J'importe le fichier routes.js
module.exports = router;
// L'export rend ce routeur reutilisable dans l'application principale.
