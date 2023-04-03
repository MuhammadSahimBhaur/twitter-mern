import { MongoClient, ServerApiVersion } from 'mongodb';
import { mongoose } from "mongoose";
import userModel from './Schemas/userSchema.js';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.USER_NAME;
const PASSWORD = process.env.PASSWORD;

console.log(USERNAME, PASSWORD)

mongoose.set('strictQuery', false);

export const mongoConnect = () => {
  return mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.e0s0zo8.mongodb.net/data?retryWrites=true&w=majority`);
}