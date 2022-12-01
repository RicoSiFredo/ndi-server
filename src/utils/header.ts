import { Response } from "express";

export function setHeader(req, res:Response){
    res.setHeader('Content-Type', 'application/json');
    const origin = req.headers.origin;
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.setHeader("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
}