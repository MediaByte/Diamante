import express, { Request, Response } from "express";
import path from 'path';

type DIAMANTE = express.Application;

export class Routes {

    public routes(app: DIAMANTE): void {

        app.get("/*", (req: Request, res: Response) => res.sendFile(path.join(__dirname, '../../dashboard/build', 'index.html')));

    };
}