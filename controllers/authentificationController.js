/**
 * Le fichier authentificationController.js est un controleur.
 * Dans ce fichier , je crée la logique de la page d'authentification.
 */

// J'importe le modèle User via db
const db = require("../models");
// L'objet db contient la connexion Sequelize et les modeles declares.
const User = db.users;
// On recupere ici le modele user pour creer des enregistrements.

module.exports = {
    // Je crée une fonction registerView qui prend en paramètre req et res
    registerView: (req, res) => {
        res.render("register");
    },

    // Je crée une fonction registerUser qui prend en paramètre req et res
    registerUser: async (req, res) => {
        console.log("### Controler registerUser ***");
        console.log("### Controler - req.body : ", req.body);
        // Les logs permettent de voir ce que le formulaire envoie au serveur.

        // Je récupère le mail et le mot de passe du formulaire
        const emailUser = req.body.email;
        // Je récupère le mot de passe saisi
        const motdepasseUser = req.body.motdepasse;

        console.log("### Controler - email : ", emailUser);
        console.log("### Controler - motdepasse : ", motdepasseUser);

        // Je vérifie que le mail et le mot de passe sont bien renseignés
        if (!emailUser || !motdepasseUser) {
            return res.render("register", {
                error: "Veuillez remplir tous les champs."
            });
        }

        // J'insère le nouvel utilisateur dans la base de données avec Sequelize
        try {
            const nouvelUtilisateur = await User.create({
                email: emailUser,
                password: motdepasseUser
            });
            // La creation en base se fait via Sequelize avec les valeurs du formulaire.
            console.log("Utilisateur créé avec succès : ", nouvelUtilisateur);
            res.redirect("/");
        } catch (err) {
            console.log("Erreur lors de la création de l'utilisateur : ", err);
            return res.status(500).send("Erreur lors de la création de l'utilisateur");
        }
    }
}
