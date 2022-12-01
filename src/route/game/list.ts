import { Response, Request } from "express";
import { DB } from "../../utils/db";
import { setHeader } from "../../utils/header";


export const listGame = (req: Request, res: Response) => {
    console.log("listGame");
    setHeader(req, res);
    const id: any = req.query.id;
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
            `,
        [],
        function (err, game) {
            console.log("listGame2");
            if (err) throw err;
            console.log("listGame4");

            if (game.length >= 0) {
                res.send({
                    "result": game
                });
            }
            else {
                res.send({
                    error: "not_found"
                });
            }
        }
    );
}


