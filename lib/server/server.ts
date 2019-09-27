// NodeJS standard library modules
import { Server } from 'https';

// Custom Mmdules
import app from './modules/app';
import Socket from './modules/socket'

// Type declarations
import { HTTPSServer } from './types/diamante';

// Constants
import { httpsOptions } from './constants/server.constants';

const httpsServer: HTTPSServer = new Server(httpsOptions, app);

new Socket(httpsServer);

httpsServer.listen(process.env.PORT, () => console.log("DIAMANTE IS NOW RUNNING"));

