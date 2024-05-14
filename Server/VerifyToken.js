const jwt=require('jsonwebtoken')

const verifyToken=(req,res,next)=>{

   let authHeader=req.headers.token  
    console.log('+-+-+-+-+--+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-++-+-+--+-+-+-+-+-',authHeader);
if(authHeader){   
jwt.verify(authHeader,process.env.Jwtseckey,(err,user)=>{
    if(err) res.status(403).json('token is not valid')
    console.log("********************************************************************",user);
console.log("user",user);
if(user.id === req.params.id){
    next(); 
}else{
    res.status(403).json('you are not allowed to that !');  
}

}) 
}else{ 
    return res.status(401).json('you are not authenticated')  
} 


};


// const verifyTokenAndAuthorization =(req,res,next)=>{
//     verifyToken(req,res,()=>{
//         if(req.user.id === req.params.id){
//             next();
//         }else{
//             res.status(403).json('you are not allowed to that !');
//         } 
//     })
// }




module.exports={ verifyToken}