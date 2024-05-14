const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cors=require('cors')
dotenv.config()

app.use(cors())

const userRouter=require('./Router/Auth')
const Loginrouter=require('./Router/Login')

 mongoose.connect(process.env.MongoUrl).then(()=>{
    console.log("databse are connected");
  }).catch((err)=>{
    console.log(err.message); 
  }) 

  app.use(express.json())

  app.use('/ardra',userRouter)
  app.use('/api',Loginrouter)

  // app.post('/', function (req, res) {
  //   res.send("success")
  // })
 
app.listen(5000,()=>{
    console.log("port 5000 is connected");
})

// http://localhost:5000/ardra/signup