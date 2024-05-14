const mongoose=require('mongoose')

const Userschemadata=new mongoose.Schema({
Username:{type:String,required:true},
Email:{type:String,unique:true,required:true},
Mob:{type:Number,required:true},
Address:{type:String,required:true},
City:{type:String,required:true},
Password:{type:String,required:true},
image:{type:String}
},{timestamps:true})

module.exports=mongoose.model('AshifBatch2024',Userschemadata)