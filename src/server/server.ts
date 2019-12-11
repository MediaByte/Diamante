// NodeJS standard library modules
import * as https from 'https';
import * as http from "http";

// Custom Mmdules
import app from './modules/app';
import Socket from './modules/socket'

// Type declarations
import { HTTPSServer, HTTPServer } from './types/diamante';

// Constants
import { httpsOptions } from './constants/server.constants';

const httpsServer: HTTPSServer = new https.Server(httpsOptions, app);
const httpServer: HTTPServer = new http.Server(app);

new Socket(httpsServer);

httpsServer.listen(process.env.HTTPS_PORT, () => console.log("DIAMANTE IS NOW RUNNING"));
httpServer.listen(process.env.HTTP_PORT);

export { httpsServer, httpServer };