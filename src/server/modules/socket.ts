// NPM Packages
import SocketIO from 'socket.io';

// Type definitions
import { SocketServer, HTTPSServer } from '../types/diamante';

// Socket Routes
import { SocketHandler } from "../routes/socket.routes";

export default class Socket {
    private socketRoutes: SocketHandler = new SocketHandler();
    private readonly server: HTTPSServer;
    public io!: SocketServer;

    constructor(server: HTTPSServer) {
        this.server = server;
        this.initialize();
        this.handleRoutes()
    };

    private handleRoutes() {
        this.io.on("connection", (stream: any) => this.socketCommunication(stream));
    }

    private initialize(): void {
        this.io = SocketIO(this.server);
    };

    private socketCommunication(socket_data: any): void {
        this.socketRoutes.socketStream(socket_data);
    };

};