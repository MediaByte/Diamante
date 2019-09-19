import express from 'express';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import bodyparser from 'body-parser'
import io from 'socket.io';
import knex from 'knex';
import dataProcessor from './controllers/endpoints/samples/energy';

const port: number = 5000 || process.env.PORT;
const app: express.Application = express();
const db: knex = knex({ client: 'pg', connection: process.env.POSTGRES_URI });

// Middleware functions
app.use(helmet());
app.use(cors());
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, '../dashboard/build')));

// //Endpoints
app.post('/sample', (req: express.Request, res: express.Response) => dataProcessor(req, res, db));
app.get('/*', (req: express.Request, res: express.Response) => res.sendFile(path.join(__dirname, '../dashboard/build', 'index.html')));


app.listen(port, () => console.log(`Waiting for connections`));




