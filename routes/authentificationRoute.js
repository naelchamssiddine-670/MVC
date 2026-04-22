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

const userController = require("../controllers/user.Controller");
// J'initialise une application expressjs
const router = express.Router();
// Maintenant, je trace mes routes en utilisant router

router.get("/register", authentifiactionController.registerView);
// La route get pour afficher la page d'enregistrement, exemple localhost:3000/register

router.post("/register", authentifiactionController.registerUser);
// la route post pour enregistrer un utilisateur, exemple localhost:3000/register

router.post("/register", userController.create);

router.get("/Users/:id", userController.findOne);

router.get("/Users", userController.findAll);
module.exports = router;
