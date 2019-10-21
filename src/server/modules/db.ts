// NPM packages
import Knex from 'knex';

// NPM Packages
import * as bcrypt from 'bcrypt';

//Type definitions
import { IPostgresConfig, ILoginData, IUserData } from '../types/diamante';

class Postgres {
    private readonly connectionString: string | undefined;
    private readonly knexParameters: IPostgresConfig
    public db!: Knex;

    constructor() {
        this.connectionString = process.env.POSTGRES_URI;
        this.knexParameters = { client: 'pg', connection: this.connectionString };
        this.initializeDB();
    }

    private initializeDB(): void {
        this.db = Knex(this.knexParameters);
    }

    private isUserValid(password: string, hash: string): boolean {
        return bcrypt.compareSync(password, hash);
    }

    private getUser(email: string): Promise<object> {
        return this.db.select('*')
            .from('users')
            .where('email', '=', email)
            .then((user: any) => Promise.resolve(user[0]))
            .catch((err: Promise<never>) => Promise.reject('Please register a new account'))
    }

    public handleSignin(user: IUserData): Promise<object> {
        const { isUserValid } = this;

        return this.db.select('email', 'hash')
            .from('login')
            .where('email', '=', user.email)
            .then((data: any): boolean => isUserValid(user.password, data[0].hash))
            .then((valid: boolean) => valid
                ? this.getUser(user.email)
                : Promise.reject('Wrong password'))
            .catch((err: Promise<never>) => Promise.reject(err))
    }

    public async createUser(user: ILoginData): Promise<object> {
        try {
            return this.db.transaction((trx: any) => {
                trx.insert({ hash: user.hash, email: user.email })
                    .into('login')
                    .returning('email')
                    .then((loginEmail: string[]) => trx('users')
                        .returning('*')
                        .insert({ email: loginEmail[0], name: user.name, joined: new Date() })
                        .then((user: Array<number | string | string | string>) => Promise.resolve(user[0])))
                    .then(trx.commit)
                    .catch(trx.rollback);
            });
        }
        catch (err) {
            return await Promise.reject();
        }
    }
}

export default new Postgres();