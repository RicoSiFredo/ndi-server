import { Express } from 'express';
import { getAnswer } from './get';


const BASE_URL = '/answer';

export const answerRoute = (app: Express) => {
    app.get(BASE_URL + "/get", getAnswer);
}