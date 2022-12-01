import { Express } from 'express';
import { listGame } from './list';

const BASE_URL = '/game'

export const gameRoute = (app: Express) => {
    app.get(BASE_URL + "/list", listGame);
}