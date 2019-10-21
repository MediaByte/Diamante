// NPM depencies
import * as redis from 'redis';

// Constants
import {
    REDIS_URI_STRING
} from '../constants/server.constants';

class RedisDatabase {
    public redisClient!: redis.RedisClient;

    constructor() {
        this.initialize();
    };

    private initialize(): void {
        this.redisClient = redis.createClient(REDIS_URI_STRING);
    };
};

export default new RedisDatabase().redisClient;