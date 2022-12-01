import { Response, Request } from "express";
import { DB } from "../../utils/db";
import { goodString, isNumeric } from "../../utils/utils";


export const addAnswer = (req: Request, res: Response) => {
    const id_question : any = req.body.id_question;
    const value : any = req.body.value;

    if(goodString(value, 0, 100) && isNumeric(id_question)) {
        DB.query(`
        SELECT * FROM Answer WHERE id_question = ? AND value = ?`, 
        [parseInt(id_question), value],
        function(err, result, fields) {
            if (err) throw err;
            if(result.length > 0) {
                DB.query(`
                UPDATE Answer SET count = count + 1 WHERE id_question = ? AND value = ?`, 
                [parseInt(id_question), value],
                function(err, result, fields) {
                    if (err) throw err;
                    res.send("updated");
                })
            }
            else {
                DB.query(`
                INSERT INTO Answer (id_question, value) VALUES (?, ?)`, 
                [parseInt(id_question), value],
                function(err, result, fields) {
                    if (err) throw err;
                    res.send("added");
                })
            }
        })
    }
    else {
        res.send("bad_request");
    }
}