/**
 * Ce fichier est un controleur.
 * Dans ce fichier , je crée la logique de la page d'accueil.
 */

// J'importe le package expressjs
module.exports = {
    accueilView: (req, res) => {// Je crée une fonction accueilView qui prend en paramètre req et res
        res.render("accueil");// Je rends la vue accueil.ejs
    }
}
