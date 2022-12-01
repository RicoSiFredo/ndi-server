"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = require("./utils/db");
const game_1 = require("./route/game");
const answer_1 = require("./route/answer");
const header_1 = require("./utils/header");
(0, db_1.initDB)();
// Port du server
const port = 3000;
/**
 * Démarre le serveur sur le port
 */
// Configuration de l'application
const app = (0, express_1.default)();
// Empécher de coder les paramètres dans l'url
app.use(body_parser_1.default.urlencoded({
    extended: true,
    limit: '10mb'
}));
app.use(body_parser_1.default.json({ limit: '10mb' }));
// Importation des routes
(0, answer_1.answerRoute)(app);
(0, game_1.gameRoute)(app);
app.use('/', function (req, res, next) {
    console.log('Request Type:', req.method);
    (0, header_1.setHeader)(req, res);
    console.log('Request URL:', req.originalUrl);
    next();
});
app.listen(port, () => {
    //importData(data_test);
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map