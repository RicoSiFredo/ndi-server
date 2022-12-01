"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAnswer = void 0;
const db_1 = require("../../utils/db");
const getAnswer = (req, res) => {
    const id = req.query.id;
    db_1.DB.query(`
    SELECT * FROM Answer WHERE id_question = ?`, [parseInt(id)], function (err, result, fields) {
        if (err)
            throw err;
        if (result.length > 0) {
            res.send(result);
        }
        else {
            res.send("not_found");
        }
    });
};
exports.getAnswer = getAnswer;
//# sourceMappingURL=get.js.map