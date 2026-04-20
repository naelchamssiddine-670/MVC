/**
 * Le fichier authentificationController.js est un controleur.
 * Dans ce fichier , je crée la logique de la page d'authentification.
 */

module.exports = {
    // Je crée une fonction registerView qui prend en paramètre req et res
    registerView: (req, res) => {// Je crée une fonction registerView qui prend en paramètre req et res
        res.render("register");// Je rends la vue register.ejs
    },
    // Je crée une fonction registerUser qui prend en paramètre req et res
    registerUser: async (req, res) => {
        console.log("### Controler registerUser ***");// J'affiche un message dans la console pour indiquer que la fonction registerUser a été appelée

        console.log("### Controler - req : ", req.body);// J'affiche le contenu de req dans la console pour vérifier que les données du formulaire sont bien reçues
        
    }
}    