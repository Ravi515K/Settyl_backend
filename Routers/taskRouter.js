const { Router } = require("express");
const taskModel = require("../Model/taskModel");
const authenticate = require("../Middleware/authentication");

const taskRouter=Router();

taskRouter.post("/create",authenticate, async(req,res)=>{
    const payload=req.body
   try {
       let task= new taskModel(payload);
       await task.save();
       res.send("task Created")
   } catch (err) {
     res.send({"err":err.message,"msg":"something went wrong"})
   }
})

taskRouter.get("/",async(req,res)=>{
    try {
        let data= await taskModel.find();
       // console.log(data,"data")
        res.send(data)
    } catch (err) {
        res.send({"err":err,"msg":"something went wrong /"})
    }
})

taskRouter.delete("/delete/:id",authenticate, async(req,res)=>{
    const ID=req.params.id;

    try {
        let taskDelete= await taskModel.findOneAndDelete({_id:ID})
        res.send("task has been Deleted")
    } catch (err) {
        res.send({"err":err,"msg":"task not deleted"})
    }
})

taskRouter.patch("/update/:id",authenticate, async(req,res)=>{
   // console.log("reqqq",req)
    const ID=req.params.id;
    const payload=req.body
    console.log("pay",ID)
    try {
        let taskUpdated=await taskModel.findOneAndUpdate({_id:ID,payload})
        res.send(taskUpdated)
    } catch (error) {
        res.send({"err":error,"msg":"task not updated"})
    }
})

module.exports=taskRouter