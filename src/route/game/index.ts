import { Express } from 'express';
import { getGame } from './get';

const BASE_URL = '/game'

export const gameRoute = (app: Express) => {
    app.get(BASE_URL + "/get", getGame);
}