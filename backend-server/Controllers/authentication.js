import { mongoose } from "mongoose";
import userModel from "../Schemas/userSchema.js"
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;

mongoose.set('strictQuery', true);

export async function register(email, password, connection) {
    // mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.e0s0zo8.mongodb.net/data?retryWrites=true&w=majority`);
    const newUser = new userModel({ email, password, tweets: [] });
    let res = await newUser.save();
    return res;
}