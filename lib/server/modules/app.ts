// NPM Packages
import express from "express";
import bodyParser from "body-parser";
import helmet from 'helmet';
import cors from 'cors';

// Routes
import { Routes } from "../routes/rest.api.routes";

// Type definitions
import { DiamanteApp } from '../types/diamante';

class App {
    public diamante: DiamanteApp = express();
    public masterRoutes: Routes = new Routes();

    constructor() {
        this.initialize();
        this.masterRoutes.routes(this.diamante);
    };

    private initialize(): void {
        this.diamante.use(helmet());
        this.diamante.use(cors());
        this.diamante.use(bodyParser.json());
        this.diamante.use(express.static(__dirname + '../../dashboard/build'));
    };


};

export default new App().diamante;