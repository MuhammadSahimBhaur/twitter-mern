import { MongoClient, ServerApiVersion } from 'mongodb';
import { mongoose } from "mongoose";
import userModel from './Schemas/userSchema.js';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;

mongoose.set('strictQuery', false);


async function main() {
  mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.e0s0zo8.mongodb.net/data?retryWrites=true&w=majority`);
  // console.log(res)
}


export async function register() {
  mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.e0s0zo8.mongodb.net/data?retryWrites=true&w=majority`);

  // const userModel = userSchema.userModel;
  // await userModel.createCollection();
  const newUser = new userModel({ email: "sahim5734@gmail.com", password: "1", tweets: [] });
  let res = await newUser.save();

  return res;
}

// main().catch(err => console.log(err));