const router=require('express').Router()
const User=require('../Model/Userschema')
const Crypto=require('crypto-js');
const multer=require('multer')
const { verifyToken } = require('../VerifyToken');


const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'../client/public/Images/');
    },
   filename:(req,file,cb)=>{
    cb(null,file.originalname)
   }
})

const upload=multer({storage:storage});

router.post('/signup',upload.single('image'), async (req,res)=>{
    console.log("Req.boby",req.file);
    try{
const newData=new User({
    Username:req.body.name,
Email:req.body.email,
Mob:req.body.mob,
Address:req.body.address,
City:req.body.city,
image:req.file.originalname,
Password:Crypto.AES.encrypt(req.body.password,process.env.PasswordSec).toString()
})
const savedData=await newData.save()
console.log("savedData",savedData);
res.status(200).json(savedData)
    }catch(err){
res.status(500).json("failed")
    }
})

router.get('/getallData',async (req,res)=>{
    try{
const alldata=await User.find()
res.status(200).json(alldata)
    }catch(err){
res.status(500).json(err.message)
    }
})

router.get('/getData/:id',verifyToken, async (req,res)=>{
    console.log("req.body in getData",req.params.id);
    console.log("Token",req.headers);
    try{
const DatabaseData=await User.findById(req.params.id)
console.log("DatabaseData",DatabaseData);
res.status(200).json(DatabaseData)
    }catch(err){
res.status(500).json(err.message)
    }
})
router.get('/getquerrydata',async (req,res)=>{
    console.log("req.body in getData",req.query);
    try{
const DatabaseData=await User.findOne({Email:req.query.singleEmail})
console.log("DatabaseData");
res.status(200).json(DatabaseData)
    }catch(err){
res.status(500).json(err.message)
    }
})

router.delete('/deleteData/:id',async (req,res)=>{
    try{
await User.findByIdAndDelete(req.params.id)
res.status(200).json('You are account is deleted')
    }catch(err){
res.status(500).json(err.message)
    }
})
   
router.put('/Updatedata/:id',verifyToken,upload.single('image'), async (req,res)=>{
    console.log("{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}",req.body);
    console.log("req.query",req.params.id);
    console.log("hello welcome******************************************",);
    req.body.password=req.body.password ? Crypto.AES.encrypt(req.body.password,process.env.PasswordSec).toString() :undefined
    try{
const updatedData=await User.findByIdAndUpdate(req.params.id,{
   $set:{Email:req.body.email,Username:req.body.name,Mob:req.body.mob,Address:req.body.address,City:req.body.city,Password:req.body.password,image:req.file.originalname}
},{new:true})
res.status(200).json(updatedData)
    }catch(err){
res.status(500).json(err.message)
    }
})                          

router.put("/mongoquerry", async (req,res)=>{
    try{
const filteredDatas=await User.updateMany({"City": "kochi"},{$set:{"Mob":9000000000000}})
res.status(200).json(filteredDatas)
    }catch(err){
        res.status(500).json(err.message)
    }
})

module.exports=router