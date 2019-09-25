import * as jwt from "jsonwebtoken";

// import fs from 'fs';

const signToken = (username: string) => {
    const jwtPayload = { username };
    const JWT_SECRET_KEY = "fs.readFileSync('../../../../config/server.key', 'utf8')";
    const signOptions = {
        expiresIn: '12h'
    };

    return jwt.sign(jwtPayload, JWT_SECRET_KEY, signOptions);
};

export default signToken;