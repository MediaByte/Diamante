import * as jwt from "jsonwebtoken";

import fs from 'fs';

const signToken = (username: string) => {
    const jwtPayload = { username };
    const JWT_SECRET_KEY = fs.readFileSync('./keys/auth/private.key', 'utf8');
    //Change these settings with your custom options
    const signOptions = {
        expiresIn: '12h',
        issuer: 'diamante',
        subject: "example@domain.com",
        audience: "https://localhost:5000",
        algorithm: "RS256"
    };

    let token = jwt.sign(jwtPayload, JWT_SECRET_KEY, signOptions);

    return token;
};

export default signToken;