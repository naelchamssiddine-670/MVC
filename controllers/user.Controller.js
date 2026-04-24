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
    // Cette methode retourne un seul utilisateur a partir de son id.
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

exports.findAll =  (req, res) => {
    // Cette methode renvoie la liste complete des utilisateurs.
    User.findAll()
    .then(data => {
        res.send(data);
    }).catch(err =>{
        res.status(500).send({
            message: err.message || "Erreur lors de la récupèrationde tous les utilisateurs."
        });
    });
};

// exemple de route complète : local:3001/users/1.Je supprime
//la ligne dont l'id = 1
exports.delete = (req, res) => {
    // Cette methode tente de supprimer un utilisateur cible.
    // Je réccupère l'id saisi dans la route complète. L'id est disponible dans req.params.id. Et je stocke l'id récupèré dans la variable idUser
    const idUser = req.params.id;
    // J'applique la méthode destroy() de Sequelize pour supprimer
    User.destroy({
        where: {id: idUser}
    })
    .then(num => {
        if(num = 1){
            res.send({
                message: "Utilisateur a été supprimer avec succès."
            });
        }else{
            res.send({
                message: `Impossible de supprimer l'utilisateur dont l'id est ${idUser}. Peut-être 
                que l'utilisateur n'existe pas.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: `Impossible de supprimer l'utilisateur dont l'id est ${idUser}`+ err.message
            
        });
    });

};

exports.deleteAll = (req, res) => {
    // Cette methode supprime tous les utilisateurs presents en base.

    User.destroy({
        where: {},
        truncate: false
    })
    .then(num => {
        res.send({
            message: `${num} Tous les utilisateur ont été supprimer.`
        })
    }).catch(err => {
        res.status(500)
            message: err.message || "Echec. Une erreur est survenue lors de la suppression de tous les utilisateurs."
    });
        
};

exports.update = (req, res) => {
    // Cette methode met a jour un utilisateur existant avec les donnees recues.
    const idUser = req.params.id;

    user.update(req.body,{
        where: {id: idUser}
    })
    .then(num => {
        if(num == 1) {
            res.send({
                message: "Utilisateur mis à jour avec succès."
            });
        }else{
            res.send({
                message: `L'utilisateur avec l'id ${idUser}n'a pas pu être mis à jour. Peut-être qu'il n'existe pas.`
            });
        }
    }).catch(err => {
        res.status
    })
};

