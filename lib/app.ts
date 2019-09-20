// Third party NPM Packages
import express, { Application } from "express";
import bodyParser from "body-parser";
import helmet from 'helmet';
import cors from 'cors';

// RESTful API Routes
import { Routes } from "./routes/rest.api.routes";

class App {
    public diamante: Application = express();
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

}

export default new App().diamante;