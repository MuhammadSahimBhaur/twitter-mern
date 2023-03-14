import { mongoose } from "mongoose";

export const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    tweets: Array
});

const userModel = mongoose.model('Users', userSchema);

export default userModel;