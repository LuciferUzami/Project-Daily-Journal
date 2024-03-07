const express = require("express")
const body_parser = require("body-parser")

const app = express()

// Connect css
app.use(express.static("public"))

// ejs system
app.set("view engine", "ejs")

app.get("/", function(req, res){
    res.render("home")
})


app.listen(3000, function(req, res){
    console.log("Connect Local Servier 3000")
})
