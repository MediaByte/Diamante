import * as fs from 'fs';
import { httpsConfig } from '../types/type.definitions'

export const httpsOptions: httpsConfig = {
    key: fs.readFileSync('./config/server.key'),
    cert: fs.readFileSync('./config/server.cert')
};