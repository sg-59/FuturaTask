const router=require('express').Router()
const User=require('../Model/Userschema')
const Crypto=require('crypto-js')
const Jwt=require('jsonwebtoken')

router.post('/login',async (req,res)=>{
    try{
const findData=await User.findOne({Email:req.body.email})
console.log("findData",findData);
!findData && res.status(401).json("invalid email")
const Hashedpassword=Crypto.AES.decrypt(findData.Password,process.env.PasswordSec)
console.log('hashedpassword',Hashedpassword);
const orginalpassword=Hashedpassword.toString(Crypto.enc.Utf8)
console.log("original password",orginalpassword);

orginalpassword!=req.body.password && res.status(401).json('invalid password')

const accessToken=Jwt.sign({
   id:findData._id 
},process.env.Jwtseckey,{expiresIn:'1d'})
   
console.log("accesstoke ?",accessToken);

const {_id,...others}=findData._doc
console.log(_id);

res.status(200).json({_id,accessToken})
    }catch(err){
res.status(500).json(err.message)
    }
})

module.exports=router

