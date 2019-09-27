// Node standard library modules
import * as fs from 'fs';

//Type definitions
import { IHTTPSConfig, RedisURIString } from '../types/diamante'

export const httpsOptions: IHTTPSConfig = {
    key: fs.readFileSync('./keys/server/server.key'),
    cert: fs.readFileSync('./keys/server/server.cert')
};

export const REDIS_URI_STRING: RedisURIString = { host: 'redis' }