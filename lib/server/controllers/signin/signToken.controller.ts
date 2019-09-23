import * as jwt from "jsonwebtoken";

const signToken = (username: any) => {
    const jwtPayload = { username };
    return jwt.sign(jwtPayload, 'JWT_SECRET_KEY', { expiresIn: '2 days' });
};

export default signToken;