// Signin Modules
import signToken from './signToken.controller';
import setToken from './setToken.controller';

const createSession = (user: any, redisClient: any) => {
    const { email, id } = user;
    const token = signToken(email);
    return setToken(token, id, redisClient)
        .then(() => {
            return { success: 'true', userId: id, token, user };
        })
        .catch(console.log);
};


export default createSession;