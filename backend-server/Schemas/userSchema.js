import { mongoose } from "mongoose";
import bcrypt from "bcrypt";


export const userSchema = new mongoose.Schema(
    {
        email: String,
        password: String,
        tweets: Array,
        Token: String
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
    // console.log("first this.password: ", this.password)
    const newPassword = await encryptPassword(this.password);
    // console.log("newPassword: ", newPassword)
    this.password = newPassword;
})

userSchema.methods.comparePassword = async function (myPlaintextPassword) {
    let compareResult = await bcrypt.compare(myPlaintextPassword, this.password);
    return compareResult;
}

const userModel = mongoose.model('Users', userSchema);


export default userModel;