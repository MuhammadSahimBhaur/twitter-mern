import express from "express";
import { mongoConnect } from "./app.js";
import { register, isDuplicate, login } from "./Controllers/authentication.js";


const app = express()
app.use(express.json()) // for parsing application/json

mongoConnect().then(console.log("Connected to mongodb")); // connecting to the mongoDB

const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/api/register', async (req, res) => {
    const { email, password } = req.body

    // need to add logic to check for duplicate emails
    if (await isDuplicate(email)) {
        res.send("Email already exists")
    } else {
        register(email, password).then((mongoRes) => {
            res.json(mongoRes)
        })
    }

});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body
    login(email, password).then((mongoRes) => {
        res.json(mongoRes)
    })
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})