// Type definitions
import { RequestHandler, ResponseHandler, NextHandler, Redis } from '../../types/diamante';

const requireAuth = (req: RequestHandler, res: ResponseHandler, next: NextHandler, redisClient: any): void => {
    const authorization: string = req.headers.authorization || "Unauthorized"

    if (!authorization) res.status(401).json({ success: false, payload: 'Unauthorized' });

    redisClient.get(authorization, (err: never, reply: string) => {
        if (err || !reply) {
            return res.status(401).json({ success: false, payload: 'Unauthorized' });
        }
        next();
    });
};

export default requireAuth;