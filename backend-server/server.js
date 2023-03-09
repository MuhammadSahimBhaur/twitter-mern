import express from "express";
import { register } from "./app.js";


const app = express()
app.use(express.json()) // for parsing application/json

const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/register', (req, res) => {
    console.log(req)
    register().then((status) => {
        console.log(status)
        res.json(status)
    })
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})