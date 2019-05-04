function dataStream(socket: any): void { 
	socket.emit('PHASE_ONE', { power: 70.2 } ); 
	socket.emit('PHASE_TWO', { power: 62.1 } ); 
	socket.emit('PHASE_THREE', { power: 64.6 } ); 
};
export default dataStream;