
const setToken = (key: any, value: any, redisClient: any) => Promise.resolve(redisClient.set(key, value, 'EX', 43200));

export default setToken;