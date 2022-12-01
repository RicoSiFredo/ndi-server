"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAnswer = void 0;
const db_1 = require("../../utils/db");
const utils_1 = require("../../utils/utils");
const addAnswer = (req, res) => {
    const id_question = req.body.id_question;
    const value = req.body.value;
    if ((0, utils_1.goodString)(value, 0, 100) && (0, utils_1.isNumeric)(id_question)) {
        db_1.DB.query(`
        SELECT * FROM Answer WHERE id_question = ? AND value = ?`, [parseInt(id_question), value], function (err, result, fields) {
            if (err)
                throw err;
            if (result.length > 0) {
                db_1.DB.query(`
                UPDATE Answer SET count = count + 1 WHERE id_question = ? AND value = ?`, [parseInt(id_question), value], function (err, result, fields) {
                    if (err)
                        throw err;
                    res.send("updated");
                });
            }
            else {
                db_1.DB.query(`
                INSERT INTO Answer (id_question, value) VALUES (?, ?)`, [parseInt(id_question), value], function (err, result, fields) {
                    if (err)
                        throw err;
                    res.send("added");
                });
            }
        });
    }
    else {
        res.send("bad_request");
    }
};
exports.addAnswer = addAnswer;
//# sourceMappingURL=add.js.map