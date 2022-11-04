const express = require("express")
const session = require("express-session")

const app = express()

app.get("/", function(req, res) {
    res.sendStatus(200)
})

app.listen(80)