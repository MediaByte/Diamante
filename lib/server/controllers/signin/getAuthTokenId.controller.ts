
import { Redis } from '../../types/diamante.d';

const getAuthTokenId = (authorized: string, redisClient: Redis, cb: any) =>
    redisClient.get(authorized, (err: any, reply: any) =>
        (err || !reply) ? cb({ success: false, payload: 'Unauthorized' }) : cb({ success: true, payload: reply }));

export default getAuthTokenId;