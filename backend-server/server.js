import express from "express";
import { mongoConnect } from "./app.js";
import AuthRouter from './Routes/authRoute.js';
import tweetsRouter from "./Routes/tweetsRoute.js";



const app = express()
app.use(express.json()) // for parsing application/json

mongoConnect().then((res) => { res ? console.log("Connected to mongodb") : console.log("Couldn't connect") }); // connecting to the mongoDB

const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use("/api/auth/", AuthRouter)
app.use("/api/tweet/", tweetsRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})