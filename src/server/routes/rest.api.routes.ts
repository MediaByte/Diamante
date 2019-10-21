// NodeJS standard library modules
import path from 'path';

// Custom Modules
import redisClient from '../modules/redis';
import db from '../modules/db';

// Controllers
import signinAuthentication from '../controllers/signin/signin.controller';
import registerUser from '../controllers/register/registerUser.controller';
import requireAuth from '../controllers/auth/authenticate.controller';

// Type definitions
import { DiamanteApp, RequestHandler, ResponseHandler, NextHandler } from '../types/diamante'

export class Routes {

    public routes(app: DiamanteApp): void {

        app.get("/*", (req: RequestHandler, res: ResponseHandler): void => res.sendFile(path.join(__dirname, '../client/build', 'index.html')));

        app.get("INSERT_LETS_ENCRYPT_CHALLENGE_HERE", (req: RequestHandler, res: ResponseHandler) => res.send("INSERT_RESPONSE_HERE"));

        app.get('/api/profile/:id', (req: RequestHandler, res: ResponseHandler, next: NextHandler): void => requireAuth(req, res, next, redisClient), (req, res) => res.json({ success: true, payload: 'Under Construction' }));

        app.post('/api/register', (req: RequestHandler, res: ResponseHandler): void => registerUser(req, res, db));

        app.post('/api/login', (req: RequestHandler, res: ResponseHandler): void => signinAuthentication(req, res, redisClient, db));

    };
}