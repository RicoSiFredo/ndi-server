import { Express } from 'express';
import { getAnswer } from './get';
import { addAnswer } from './add';


const BASE_URL = '/answer';

export const answerRoute = (app: Express) => {
    app.get(BASE_URL + "/get", getAnswer);
    app.post(BASE_URL + "/add", addAnswer);
}