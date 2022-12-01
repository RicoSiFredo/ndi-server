import express from 'express';
import bodyParser from 'body-parser';

// Port du server
const port = 3000;

/**
 * Démarre le serveur sur le port
 */

// Configuration de l'application
const app = express();
// Empécher de coder les paramètres dans l'url
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '10mb'
}));
app.use(bodyParser.json({ limit: '10mb' }));

app.listen(port, () => {
    //importData(data_test);
    return console.log(`Express is listening at http://localhost:${port}`);
})