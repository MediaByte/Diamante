// NPM Packages
import * as bcrypt from 'bcrypt';

// Type definitions
import { RequestHandler, ILoginData, ResponseHandler } from '../../types/diamante';


const registerUser = (req: RequestHandler, res: ResponseHandler, db: any): void => {
    const { email, name, password } = req.body;

    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    const loginCredentials: ILoginData = { hash: hash, email: email, name: name };

    (!email || !name || !password)
        ? res.json({ success: false, payload: 'incorrect form submission' })
        : db.createUser(loginCredentials)
            .then((data: object) => res.json({ success: true, payload: data }))
            .catch((err: Promise<never>) => res.status(400).json({ success: false, payload: 'Unable to register user at this time' }));
}

export default registerUser;



