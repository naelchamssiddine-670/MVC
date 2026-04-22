const db = require("../models");// J'importe le fichier db.js qui contient la configuration de la base de données

const User = db.users;// J'associe le modèle User à la variable User

const Op = db.Sequelize.Op;// J'associe les opérateurs de Sequelize à la variable Op

exports.create = (req, res) => {// Je définis une fonction create qui prend en paramètre la requête et la réponse
    const emailUser = req.body.email;// Je récupère l'email de l'utilisateur à partir du corps de la requête
    const motdepasseUser = req.body.motdepasse;// Je récupère le mot de passe de l'utilisateur à partir du corps de la requête

    const user = {// Je crée un objet user qui contient l'email et le mot de passe de l'utilisateur
        email: emailUser,
        motdepasse: motdepasseUser
    };

    User.create(user)// Je crée un nouvel utilisateur dans la base de données en utilisant le modèle User
        .then(data => {// Si la création de l'utilisateur est réussie, j'envoie les données de l'utilisateur en réponse
            res.send(data);
        }).catch(err => {// Si la création de l'utilisateur échoue, j'envoie un message d'erreur en réponse
            res.status(500).send({
                message: err.message || "Une erreur s'est produite lors de la création de l'utilisateur."
            });
        });
}; 


exports.findOne = (req, res) => {
    // Je récupère l'id de l'utilisateur
    const idUser = req.params.id;

    // Je recherche l'utilisateur dans la base de données
    User.findByPk(idUser)
        .then(data => {
            if(data) { // si je trouve l'utilisateur (data) 
                res.send(data); // ALORS j'ai l'utilisateur (data)
            }else{
                res.status(404).send({
                    message: `L'utilisateur avec l'identifiant ${idUser} n'existe pas .`
                    
                });
            }
    
        })
        .catch(err =>{
            res.status(500).send({
                message : `Erreur lors de la recherche de
                l'utilisateur avec l'identifiant ${idUser}`
            });
        });
};