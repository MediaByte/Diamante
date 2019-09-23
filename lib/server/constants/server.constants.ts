import * as fs from 'fs';

//Type definitions
import { IHTTPSConfig, REDIS_URI } from '../types/type.definitions'

export const httpsOptions: IHTTPSConfig = {
    key: fs.readFileSync('./config/server.key'),
    cert: fs.readFileSync('./config/server.cert')
};

export const REDIS_URI_STRING: REDIS_URI = { url: process.env.REDIS_URI }