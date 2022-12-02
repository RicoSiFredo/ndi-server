import { Express } from 'express';
import { listGame } from './list';
import { getGame } from './get';

const BASE_URL = '/game'

export const gameRoute = (app: Express) => {
    app.get(BASE_URL + "/get", getGame);
    app.get(BASE_URL + "/list", listGame);
}