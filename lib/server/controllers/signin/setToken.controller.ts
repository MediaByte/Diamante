
const setToken = (key: any, value: any, redisClient: any) => Promise.resolve(redisClient.set(key, value));

export default setToken;