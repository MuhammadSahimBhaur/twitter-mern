import express from "express";
import { verifyToken } from "../Utils/token.js"

const tweetsRouter = express.Router();

tweetsRouter.get("/", (req, res) => {
    if (req.headers['authorization'] !== undefined) {
        const token = req.headers['authorization'].split(' ')[1]
        const verification = verifyToken(token)
        console.log(verification)
        res.json({ tweets: [{ tweet: "hi!" }, { tweet: "Hey there everyone!" }] })
    } else {
        res.send("Not authorized, please login again")
    }
})

export default tweetsRouter;