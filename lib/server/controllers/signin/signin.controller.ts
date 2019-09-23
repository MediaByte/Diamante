// NPM Packages
import * as redis from 'redis'

// Constants
import { REDIS_URI_STRING } from '../../constants/server.constants';

// Modules
import createSession from './createSession.controller';
import getAuthTokenId from './getAuthTokenId.controller';
import handleSignin from './handleSignIn.controller';

const redisClient = redis.createClient(REDIS_URI_STRING);

const signinAuthentication = (db: any, bcrypt: any) => (req: any, res: any) => {
    const { authorization } = req.headers;
    return authorization ? getAuthTokenId(req, res, redisClient)
        : handleSignin(db, bcrypt, req, res)
            .then((data: any) =>
                data.id && data.email ? createSession(data, redisClient) : Promise.reject(data))
            .then((session: any) => res.json(session))
            .catch((err: any) => res.status(400).json(err));
};

export default signinAuthentication;