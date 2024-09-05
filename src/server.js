import express from "express";

const app = express()
const port = 3003

app.get("/", (req, res) => {
    res.send("home")
})

app.listen(port, () => {
    console.log("app is running on $port")
})
