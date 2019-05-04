import knex from 'knex';
interface ISample { 
    device : string, 
    time : number, 
    v1 : number, 
    i1 : number, 
    p1 : number, 
    v2 : number, 
    i2 : number, 
    p2 : number, 
    v3 : number, 
    i3 : number, 
    p3 : number 
};
function storageHandler (data: ISample, postgres: knex ): void {
	postgres && data
		? postgres.transaction(trx => {
			trx.insert({
				sample_time: data.time,
				voltage: data.v1,
				current: data.i1,
				amps: data.p1
			})
				.into('phase_one')
				.returning('sample_time')
				.then(time => {
					return trx('phase_two')
						.returning('*')
						.insert({
							sample_time: data.time,
							voltage: data.v2,
							current: data.i2,
							amps: data.p2
						})
						.returning('sample_time')
						.then(time => {
							return trx('phase_three')
								.returning('*')
								.insert({
									sample_time: data.time,
									voltage: data.v3,
									current: data.i3,
									amps: data.p3
								})
						})
				})
				.then(trx.commit)
				.catch(trx.rollback)
			})
			.catch(console.log)
		: null
}

export default storageHandler;