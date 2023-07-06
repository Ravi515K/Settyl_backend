const express=require("express");
const cors=require('cors')
const userRouter = require("./Routers/userRouter");
const taskRouter = require("./Routers/taskRouter");
const Connection  = require("./db");

const app = express();
app.use(express.json());
app.use(cors())
app.get("/",(req,res)=>{
       
        res.send("Home Page")
    
})
app.use("/user",userRouter)
//  app.use(authenticate)
app.use("/task",taskRouter)


app.listen(8080,async()=>{
    try{
        await Connection
        console.log("DB is connected")
    }catch(err){console.log(err)}
    console.log("server is Running on Port 8080")
})