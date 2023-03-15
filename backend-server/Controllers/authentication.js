import { mongoose } from "mongoose";
import userModel from "../Schemas/userSchema.js"
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;

mongoose.set('strictQuery', true);

// This function exports a promise-based function called 
// "register" which accepts three parameters - email, password, and connection
export async function register(email, password) {

    const newUser = new userModel({ email, password, tweets: [] });
    let res = await newUser.save();
    return res;
}

export async function isDuplicate(email) {
    let res = await userModel.find({ email }).exec();
    if (res[0] === undefined) {
        return false; // no duplicates accounts with same address
    }
    else {
        return true; // duplicate exists!!
    };
}

export async function login(email, password) {

}