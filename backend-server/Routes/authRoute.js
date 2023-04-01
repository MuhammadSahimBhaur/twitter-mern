import express from "express";
import { generateToken } from "../Utils/token.js"
import { register, exists, login } from "../Controllers/authController.js";


const AuthRouter = express.Router();

AuthRouter.post('/register', async (req, res) => {
    const { email, password } = req.body
    // need to add logic to check for duplicate emails
    let existsResult = await exists(email)
    if (existsResult) {
        res.send("Email already exists")
    } else {
        register(email, password).then((mongoRes) => {
            const token = generateToken({ id: mongoRes.id })
            // console.log("token sent back:", token)
            res.json({ token })
        })
    }

});

AuthRouter.post('/login', async (req, res) => {
    const { email, password } = req.body
    let loginToken = await login(email, password)
    console.log("loginToken: ", loginToken)
    if (loginToken) {
        res.json({ loginToken })
    } else {
        res.send("Account doesn't exist, or password is wrong")
    }
});

export default AuthRouter;
