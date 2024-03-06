const express = require("express")
const body_parser = require("body-parser")

const app = express()

app.get("/", function(req, res){
    res.send("Connected")
})


app.listen(3000, function(req, res){
    console.log("Connect Local Servier 3000")
})
