


const getAuthTokenId = (req: any, res: any, redisClient: any) => {
    const { authorization } = req.headers;
    return redisClient.get(authorization, (err: any, reply: any) => {
        if (err || !reply) {
            return res.status(401).send('Unauthorized');
        }
        return res.json({ id: reply });
    });
};

export default getAuthTokenId;