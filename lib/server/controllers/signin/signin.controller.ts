
//Type definitions
import { RequestHandler, ResponseHandler, Redis } from '../../types/diamante';

// Modules
import createSession from './createSession.controller';
import getAuthTokenId from './getAuthTokenId.controller';


const signinAuthentication = (req: RequestHandler, res: ResponseHandler, redisClient: Redis, db: any): void => {

    const authorized = req.headers.authorization;

    const callback = (args: any) => args.success ? res.json({ ...args }) : res.status(400).json({ ...args })

    authorized
        ? getAuthTokenId(authorized, redisClient, callback)
        : db.handleSignin({ ...req.body })
            .then((data: any) => (data.id && data.email) ? createSession(data, redisClient) : Promise.reject(data))
            .then((session: any) => res.json({ success: true, payload: session }))
            .catch((err: Promise<never>) => res.status(400).json({ success: false, payload: err }));

};

export default signinAuthentication;