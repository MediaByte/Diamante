// NPM Packages
import SocketIO from 'socket.io';

// Type definitions
import { DIAMANTE_SECURE_SOCKET, DIAMANTE_HTTPS_PROTOCOL } from '../types/type.definitions';

// Socket Routes
import { SocketHandler } from "../routes/socket.routes";

export default class Socket {
    public socketRoutes: SocketHandler = new SocketHandler();
    public io!: DIAMANTE_SECURE_SOCKET;
    private readonly server: DIAMANTE_HTTPS_PROTOCOL;

    constructor(server: DIAMANTE_HTTPS_PROTOCOL) {
        this.server = server;
        this.initialize();
    };

    private initialize(): void {
        this.io = SocketIO(this.server);
    };

    public socketCommunication(socket_data: any): void {
        this.socketRoutes.socketStream(socket_data);
    };

};