import { Response, Request } from "express";
import { DB } from "../../utils/db";

export const getAnswer = (req: Request, res: Response) => {
    const id: any = req.query.id;

    DB.query(`
    SELECT * FROM Answer WHERE id_question = ?`, 
    [parseInt(id)], 
    function(err, result, fields) {
        if (err) throw err;
        if(result.length > 0) {
            res.send(result);
        }
        else {
            res.send("not_found");
        }


    })
}