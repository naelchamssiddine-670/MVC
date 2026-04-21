const dbConfig = require("../config/db.config");// J'importe le fichier de configuration de la base de données

const Sequelize = require("sequelize");// J'importe le fichier db.js qui contient la configuration de la base de données

const sequelize = new Sequelize(// Je définis les paramètres de connexion à la base de données
    dbConfig.BD, dbConfig.USER, dbConfig.PASSWORD, {// nom de la base de données, nom d'utilisateur, mot de passe
        host: dbConfig.HOST,// hôte de la base de données
        dialect: dbConfig.dialect,// type de base de données
        operatorsAliases: false,// désactive les alias d'opérateurs obsolètes

        pool: {// pool de connexions
            max: dbConfig.pool.max,// nombre maximum de connections par pool
            min: dbConfig.pool.min,// nombre minimum de connections par pool
            acquire: dbConfig.pool.acquire,// temps maximum pour acquérir une connection
            idle: dbConfig.pool.idle// temps maximum qu'une connection peut rester inactives
        }
    }
);
// J'initialise une variable db qui va contenir les modèles de la base de données
const db = {};
// J'associe la classe Sequelize à la variable db.Sequelize
db.Sequelize = Sequelize;
// J'associe la connexion à la base de données à la variable db.sequelize
db.sequelize = sequelize;
// J'importe le modèle User et je l'associe à la variable db.users
db.users = require("./User")(sequelize, Sequelize);
// J'importe le modèle User et je l'associe à la variable db.users
module.exports = db;