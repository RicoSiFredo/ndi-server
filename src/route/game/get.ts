import { Response, Request } from "express";
import { DB } from "../../utils/db";
import { isNumeric } from "../../utils/utils";


export const getGame = (req: Request, res: Response) => {
    const id: any = req.query.id;
    if (isNumeric(id)) {
        DB.query(`
            SELECT
                Game.id AS game_id,
                Game.title AS game_title,
                Game.description AS game_description,

                Question.id AS question_id,
                Question.title AS question_title,
                Question.title AS question_title,
                Question.picture AS question_picture,
                Question.timer AS question_timer,
                Question.description AS question_description,
                Question.good_answer AS question_good_answer

            FROM Game

            INNER JOIN Question
            ON Question.id_game = Game.id

            WHERE Game.id = ?
            `,
            [parseInt(id)],
            function (err, game) {
                if (err) throw err;

                if (game.length >= 0) {
                    res.send(game);
                }
                else {
                    res.send("not_found");
                }
            }
        );
    }
    else {
        res.send("bad_value");
    }
}


