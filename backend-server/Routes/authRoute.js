import express from "express";
import { register } from "../Controllers/authentication.js";

const router = express.Router();

router.post('/api/register', (req, res) => {
    const { email, password } = req.body
    register(email, password).then((mongoRes) => {
        console.log(mongoRes)
        res.json(mongoRes)
    })
});