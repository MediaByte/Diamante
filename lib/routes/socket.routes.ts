
export class SocketHandler {
    public socketStream(socket: any): void {
        socket.on('master', (master: any) => console.log(master))
    }
}