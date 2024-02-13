const express = require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const app =express()

const securityRoute=require("./controllers/securityRouter")

app.use(express.json())
app.use(cors())

//connecting to monngodb
mongoose.connect("mongodb+srv://Joyna-Joy-24:Joyna24joy@cluster0.gj0szp5.mongodb.net/securitydb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)


app.use("/api/sec",securityRoute)

app.listen(3001,()=>{
    console.log("server running")
})