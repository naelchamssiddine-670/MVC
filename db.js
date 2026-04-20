/**
 * Permet à Sequelize de se connecter à la base de données
 * 
 */

const Sequelize = require("sequelize");
// Je définis les paramètres de connexion à la base de données
const sequelize = new Sequelize(
    "maygourmet",// nom de la base de données
    "root",// nom d'utilisateur
    "naelchamssiddine@118",// mot de passe
    {
        host: "localhost",// hôte de la base de données
        dialect: "mysql"// type de base de données
    }
);

module.exports = sequelize;// J'exporte la connexion à la base de données pour l'utiliser dans les modèles