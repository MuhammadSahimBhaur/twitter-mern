import { mongoose } from "mongoose";

export const tweet = new mongoose.Schema({
    tweet: { type: String, required: true, minLength: 140 },
    likesCount: Number,
    likesUserList: { type: Array, userSchema },
}, { timestamps: true });