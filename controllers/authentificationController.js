/**
 * Le fichier authentificationController.js est un controleur.
 * Dans ce fichier , je crée la logique de la page d'authentification.
 */

module.exports = {
    registerView: (req, res) => {// Je crée une fonction registerView qui prend en paramètre req et res
        res.render("register");// Je rends la vue register.ejs
    }
}    