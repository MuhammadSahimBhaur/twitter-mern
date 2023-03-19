// using a secret
// make a jwt token given the users object id or email/pass

import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config({ path: "../.env" });

const SECRET = process.env.SECRET;

export function generateToken(userID) {
    var token = jwt.sign(userID, SECRET, { expiresIn: '2h' });
    return token;
}


export function verifyToken(token) {
    console.log("token: ", token)
    var verification = jwt.verify(token, SECRET)
    console.log("verification: ", verification)
    return verification;
}