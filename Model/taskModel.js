
const { Schema, model } = require("mongoose");

const taskSchema=Schema({
    title:String,
    description:String,
    due_date:String,
    status:String,
    assigned_user:String
})

const taskModel=model("task",taskSchema)
module.exports=taskModel