// Signin Modules
import signToken from './signToken.controller';
import setToken from './setToken.controller';

import { Redis, IUser } from '../../types/diamante';

const createSession = (user: IUser, redisClient: Redis) => {
    const { email, id } = user;
    const token = signToken(email);
    return setToken(token, id, redisClient)
        .then(() => { return { success: 'true', userId: id, token } })
        .catch(console.log);
};


export default createSession;