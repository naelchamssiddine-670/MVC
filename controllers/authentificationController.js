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

        // Pour récupérer le mail stocké dans un variable
        const emailUser = req.body.email;
        // Pour récupérer le mot de passe stocké dans un variable
        const motdepasseUser = req.body.motdepasse;

        console.log("### Controler - email : ", emailUser);// J'affiche le contenu de la variable email dans la console pour vérifier que le mail est bien récupéré
        console.log("### Controler - motdepasse : ", motdepasseUser);// J'affiche le contenu de la variable motdepasse dans la console pour vérifier que le mot de passe est bien récupéré

        /* Je m'assure que le mail et le mot de passe sont bien renseignés 
        Deux conditions à vérifier :
        1. Si la variable emailUser est vide 
        OU
        2. si la variable motdepasseUser est vide
        */
        if (!emailUser || !motdepasseUser) {
            return res.render("register", { 
                error: "Veuillez remplir tous les champs." 
            });// Si l'une des conditions est vérifiée, je rends la vue register.ejs avec un message d'erreur
        }

        // Il n'y a pas d'erreur. Passe à la suite

        let requeteSQL = "INSERT INTO user (id, email, password) VALUES (?, ?, ?)";// Je crée une requete SQL pour insérer les données du formulaire dans la table users de la base de données

        let ordreDonnees = [null, emailUser, motdepasseUser];// Je crée un tableau qui contient les données à insérer dans la base de données. Le premier élément est null car l'id est auto-incrémenté

        req.getConnection((err, connection) => {
            if (err) {
                console.log("Erreur de connexion à la base de données : ", err);// J'affiche un message d'erreur dans la console si la connexion à la base de données échoue
            } else {
                connection.query(requeteSQL, ordreDonnees, (err, 
                nouvelUtilisateur) => {
                    if (err) {
                        console.log("Erreur lors de l'insertion de l'utilisateur : ", err);// J'affiche un message d'erreur dans la console si l'insertion de l'utilisateur échoue
                    } else {
                        console.log("Utilisateur crée avec succès : ", nouvelUtilisateur);// J'affiche un message dans la console pour indiquer que l'utilisateur a été inséré avec succès
                        res.redirect("/");// Je redirige l'utilisateur vers la page d'authentification après l'inscription
                    }
                });
            }
        });
    }
}