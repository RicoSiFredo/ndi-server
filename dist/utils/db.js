"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDB = exports.DB = void 0;
const mysql_1 = __importDefault(require("mysql"));
// Import DB pour faire votre requete
exports.DB = mysql_1.default.createConnection({
    host: "localhost",
    user: "root",
    password: "@7410!Aajki%dfhrezye",
    database: "Sida"
});
// Connect notre code à la base de données
exports.DB.connect();
// Fonction qui génère les tables modification / ajout de table doit être renseigné ici
const initDB = () => {
    exports.DB.query(`
        CREATE TABLE IF NOT EXISTS Game (
            id INT NOT NULL AUTO_INCREMENT,
            title VARCHAR(50) NOT NULL,
            description TEXT NOT NULL,
            PRIMARY KEY (id)
        );
    `);
    exports.DB.query(`
        CREATE TABLE IF NOT EXISTS Question (
            id INT NOT NULL AUTO_INCREMENT,
            id_game INT NOT NULL,
            title TEXT NOT NULL,
            description TEXT,

            picture VARCHAR(50),
            timer FLOAT,
            good_answer TEXT NOT NULL,
            
            PRIMARY KEY (id),

            FOREIGN KEY (id_game) REFERENCES Game(id) ON DELETE CASCADE
        );
    `);
    exports.DB.query(`
        CREATE TABLE IF NOT EXISTS Answer (
            id INT NOT NULL AUTO_INCREMENT,
            id_question INT NOT NULL,

            value TEXT NOT NULL,
            count INT NOT NULL DEFAULT 1,
            
            PRIMARY KEY (id),

            FOREIGN KEY (id_question) REFERENCES Question(id) ON DELETE CASCADE
        );
    `);
};
exports.initDB = initDB;
//# sourceMappingURL=db.js.map