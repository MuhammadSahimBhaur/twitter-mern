import { mongoose } from "mongoose";
import userModel from "../Schemas/userSchema.js"
import dotenv from 'dotenv';
import { generateToken } from "../Utils/token.js"


dotenv.config();

const USERNAME = process.env.USER_NAME;
const PASSWORD = process.env.PASSWORD;

mongoose.set('strictQuery', true);

// This function exports a promise-based function called 
// "register" which accepts three parameters - email, password, and connection
export async function register(email, password) {

    const newUser = new userModel({ email, password, tweets: [] });
    let res = await newUser.save();
    return res;
}

// returns: false | user object [should be token]
export async function exists(email) {
    let res = await userModel.find({ email }).exec();
    if (res[0] === undefined) {
        return false; // no duplicates accounts with same address
    }
    else {
        return res; // duplicate exists!!
    };
}

export async function login(candidateEmail, candidatePassword) {
    let loginStatus = String()
    let existsResult = await exists(candidateEmail)
    if (existsResult[0]) {
        // console.log(existsResult[0])
        const email = existsResult[0].email
        const password = existsResult[0].password
        const tweets = existsResult[0].tweets
        const id = existsResult[0].id
        const newUser = new userModel({ email, password, tweets });
        loginStatus = await newUser.comparePassword(candidatePassword)

        console.log("loginStatus: ", loginStatus)
        if (loginStatus) {
            const generatedToken = generateToken({ id })
            return generatedToken
        }
    } else return loginStatus;
}