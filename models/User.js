/**
 * User.js est un modèle qui sert à créer des utilisateurs. Le modèle  User est de : email et password.
 */

const DataTypes = require("sequelize");
// J'importe le fichier db.js qui contient la configuration de la base de données
const sequelize = require("../db");
// Je définis le modèle User en utilisant la méthode define de Sequelize
/*module.exports = sequelize.define(
    "User", {
        id: {// Je définis l'attribut id qui est de type entier, clé primaire et auto-incrémenté
            type: DataTypes.INTEGER,// type de l'attribut id
            primaryKey: true,// id est la clé primaire
            autoIncrement: true// id est auto-incrémenté
        },
        email: {// Je définis l'attribut email qui est de type chaîne de caractères, non nul et unique
            type: DataTypes.STRING,// type de l'attribut email
            unique: true// email doit être unique
        },
        password: {// Je définis l'attribut password qui est de type chaîne de caractères et non nul
            type: DataTypes.STRING,// type de l'attribut password
            allowNull: false// password ne peut pas être nul
        }
    }
);
*/
module.exports = (sequelize, Sequelize) => {
    const UserModdel = sequelize.define("user", {
        email: {
            type: Sequelize.STRING,
            unique: true
        },
        password: {
            type: Sequelize.STRING,

        }
    });
    
    return UserModdel;
}
