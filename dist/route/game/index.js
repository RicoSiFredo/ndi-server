"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameRoute = void 0;
const list_1 = require("./list");
const BASE_URL = '/game';
const gameRoute = (app) => {
    app.get(BASE_URL + "/list", list_1.listGame);
};
exports.gameRoute = gameRoute;
//# sourceMappingURL=index.js.map