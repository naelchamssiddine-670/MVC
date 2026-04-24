module.exports = {
    // Parametres principaux de connexion a la base MySQL locale.
    HOST: "localhost",
    USER: "root",
    PASSWORD: "naelchamssiddine@118",
    BD: "maygourmet",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
/**
 * Les paramètres HOST, USER, PASSWORD? BD et dialect sont utilisés pour se connecter à MySQL.
 * Le paramètre pool est utilisé pour Sequelize:
 * max: nombre maximum de connections par pool
 * min: nombre minimum de connections par pool
 * acquire: durée maximale, en millisecondes, pendant laquelle Sequelize essaiera d'acquérir une connexion avant de lancer une erreur
 * idle: durée maximale, en millisecondes, pendant laquelle une connexion peut être inactive avant d'être libérée
 * 
 */
