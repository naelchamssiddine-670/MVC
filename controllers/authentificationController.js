/**
 * Le fichier authentificationController.js est un controleur.
 * Dans ce fichier , je crée la logique de la page d'authentification.
 */

// J'importe le modèle User via db
const db = require("../models");
const User = db.users;

module.exports = {
    // Je crée une fonction registerView qui prend en paramètre req et res
    registerView: (req, res) => {
        res.render("register");
    },

    // Je crée une fonction registerUser qui prend en paramètre req et res
    registerUser: async (req, res) => {
        console.log("### Controler registerUser ***");
        console.log("### Controler - req.body : ", req.body);

        // Je récupère le mail et le mot de passe du formulaire
        const emailUser = req.body.email;
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
            console.log("Utilisateur créé avec succès : ", nouvelUtilisateur);
            res.redirect("/");
        } catch (err) {
            console.log("Erreur lors de la création de l'utilisateur : ", err);
            return res.status(500).send("Erreur lors de la création de l'utilisateur");
        }
    }
}