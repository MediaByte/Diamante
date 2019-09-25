import * as fs from 'fs';

//Type definitions
import { IHTTPSConfig, RedisURIString } from '../types/diamante'

export const httpsOptions: IHTTPSConfig = {
    key: fs.readFileSync('./config/server.key'),
    cert: fs.readFileSync('./config/server.cert')
};

export const REDIS_URI_STRING: RedisURIString = { host: 'redis' }