// Node standard library modules
import { createServer, Server } from 'https';
import * as fs from 'fs';

// Custom Modules
import app from './app';

interface httpsConfig {
    key: Buffer,
    cert: Buffer
};

const httpsOptions: httpsConfig = {
    key: fs.readFileSync('./config/key.pem'),
    cert: fs.readFileSync('./config/cert.pem')
};

const server: Server = createServer(httpsOptions, app);

server.listen(process.env.PORT, () => console.log("DIAMANTE IS NOW RUNNING"));


