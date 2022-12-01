"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.answerRoute = void 0;
const get_1 = require("./get");
const add_1 = require("./add");
const BASE_URL = '/answer';
const answerRoute = (app) => {
    app.get(BASE_URL + "/get", get_1.getAnswer);
    app.post(BASE_URL + "/add", add_1.addAnswer);
};
exports.answerRoute = answerRoute;
//# sourceMappingURL=index.js.map