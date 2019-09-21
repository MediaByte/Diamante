// NodeJS standard library modules
import { Server } from 'https';

// Custom Mmdules
import app from './modules/app';
import Socket from './modules/socket'

// Type declarations
import { DIAMANTE_HTTPS_PROTOCOL } from './types/type.definitions';
import { SOCKET_COMMUNICATION } from './types/type.definitions';

// Constants
import { httpsOptions } from './constants/server.constants';

const httpsServer: DIAMANTE_HTTPS_PROTOCOL = new Server(httpsOptions, app);
const socket: SOCKET_COMMUNICATION = new Socket(httpsServer);

socket.io.on("connection", (stream : any) => socket.socketCommunication(stream));

httpsServer.listen(process.env.PORT, () => console.log("DIAMANTE IS NOW RUNNING"));

