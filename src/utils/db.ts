import mysql from "mysql";


// Import DB pour faire votre requete
export const DB = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "@7410!Aajki%dfhrezye",
    database: "Sida"
});
// Connect notre code à la base de données
DB.connect();

// Fonction qui génère les tables modification / ajout de table doit être renseigné ici
export const initDB = () => {

    DB.query(`
        CREATE TABLE IF NOT EXISTS Game (
            id INT NOT NULL AUTO_INCREMENT,
            title VARCHAR(50) NOT NULL,
            description TEXT NOT NULL,
            PRIMARY KEY (id)
        );
    `);

    DB.query(`
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

    DB.query(`
        CREATE TABLE IF NOT EXISTS Answer (
            id INT NOT NULL AUTO_INCREMENT,
            id_question INT NOT NULL,

            value TEXT NOT NULL,
            count INT NOT NULL DEFAULT 1,
            
            PRIMARY KEY (id),

            FOREIGN KEY (id_question) REFERENCES Question(id) ON DELETE CASCADE
        );
    `);

}