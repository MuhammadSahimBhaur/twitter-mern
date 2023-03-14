import express from "express";
import { register } from "./app.js";


const app = express()
app.use(express.json()) // for parsing application/json

const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/api/register', (req, res) => {
    const { email, password } = req.body
    register(email, password).then((mongoRes) => {
        console.log(mongoRes)
        res.json(mongoRes)
    })
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})