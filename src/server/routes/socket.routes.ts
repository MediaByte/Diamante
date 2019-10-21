
export class SocketHandler {
    public socketStream(socket: any): void {
        socket.on('debug', (master: any) => console.log(master))
    }
}