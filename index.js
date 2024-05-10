const express = require("express")
const path = require("path")










const app=express();
const port = 5000;

// app.get("/",(req,res)=>{res.sendFile(path.join(__dirname + "hello world"))})
app.get("/",(req,res)=>{res.send("hello world")});







app.listen(port,()=>{
console.log(`server started on port${port}`)


})