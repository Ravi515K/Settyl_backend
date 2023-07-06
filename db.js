require('dotenv').config()
const mongoose=require('mongoose');
const Connection=mongoose.connect(process.env.URL);

module.exports=Connection