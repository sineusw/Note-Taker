const express = require("express")
const path = require("path")
const app = express()
app.use(express.static(path.join(__dirname, "public")))
app.get("/notes", function(req,res){
    // res.render("notes.html")
    res.sendFile(__dirname+ "/public/"+ "notes.html")
    })
app.get("*", function(req,res){
res.sendFile(__dirname+ "/public/"+ "index.html")
})

app.listen(5000, function(){
    console.log("app listening")
})