const express =require('express')
const mongoose =require("mongoose");
const bodyParser = require ('body-parser')
const userRouter =require('./Routes/user.cjs')
const app =express()
app.use(bodyParser.json());

const url="mongodb+srv://aboreda:500@cluster0.adq9iwm.mongodb.net/aboreda?retryWrites=true&w=majority"

const connectDB=async()=>{
try {
    mongoose.set('strictQuery',false)
    mongoose.connect(url)
    console.log("connected to Mongo DB")
}catch(err){
    console.log("error while connect to mongo"+err)
    process.exit()
}

}
connectDB()

app.use('/',userRouter)



app.listen(3000)