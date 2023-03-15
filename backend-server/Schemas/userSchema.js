import { mongoose } from "mongoose";
import bcrypt from "bcrypt";

export const userSchema = new mongoose.Schema(
    {
        email: String,
        password: String,
        tweets: Array,
    },
    {
        timestamps: true
    }
);


async function encryptPassword(myPlaintextPassword) {
    let salt = await bcrypt.genSalt(2)
    let hash = await bcrypt.hash(myPlaintextPassword, salt)
    return hash;
};

userSchema.pre('save', async function () {
    this.password = await encryptPassword(this.password);
})

const userModel = mongoose.model('Users', userSchema);


export default userModel;