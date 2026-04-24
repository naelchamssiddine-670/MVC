/**
* Le fichier authentificationRoute.js a pour 
* mission de tracer les routes pour :
* enregistrer ou créer un compte utilisateur
* se connecter à un compte utilisateur
*/


// J'importe le package expressjs
const express = require("express");
// Express est utilise ici pour isoler les routes d'authentification.
// J'importe le fichier authentificationController.js
const authentifiactionController = require("../controllers/authentificationController");
// Ce controleur gere surtout l'affichage et le traitement du formulaire.

const userController = require("../controllers/user.Controller");
// Ce second controleur expose les operations CRUD sur les utilisateurs.
// J'initialise une application expressjs
const router = express.Router();
// Toutes les routes definies ci-dessous seront montees depuis app.js.
// Maintenant, je trace mes routes en utilisant router

router.get("/register", authentifiactionController.registerView);
// Affiche la page register.ejs.
// La route get pour afficher la page d'enregistrement, exemple localhost:3000/register

router.post("/register", authentifiactionController.registerUser);
// Traite le formulaire d'inscription via le controleur d'authentification.
// la route post pour enregistrer un utilisateur, exemple localhost:3000/register

router.post("/register", userController.create);
// Cette route reutilise la meme URL pour la creation d'utilisateur.

router.get("/Users/:id", userController.findOne);
// Recupere un utilisateur precis.

router.get("/Users", userController.findAll);
// Recupere tous les utilisateurs.

router.delete("/users/:id", userController.delete);
// Supprime un utilisateur grace a son id.

// Supprimer tous les utilisateur 
router.delete("/users", userController.deleteAll);
// Supprime toute la table des utilisateurs.

router.put("/user/:id", userController.update);

module.exports = router;
// Ce routeur est ensuite importe dans app.js.
