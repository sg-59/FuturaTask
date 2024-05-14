import axios from "axios";
import { addtoUser } from "./Redux/userslice";
import { Publicrequest, Tokenrequest } from "./Axioscreate";

export const signupApi=async(data)=>{
         console.log("values..............",data);
         try{
            const datas=await Publicrequest.post('/ardra/signup',data)
            console.log("final answer...................",datas.data);
         }catch(err){
            console.log(err.message);
         }
     
}



export const LoginApi=async(data,dispatch)=>{
    console.log("data",data);
    try{
const Logindata=await Publicrequest.post('/api/login',data)
console.log("Logindata >>>>>>>>>",Logindata.data);
dispatch(addtoUser(Logindata.data))
    }catch(err){
        console.log(err.message);
    }
}

export const GetprofileData=async(id)=>{
    try{
const profileData=await Tokenrequest.get(`/ardra//getData/${id}`)
console.log("final answer profile data",profileData)
return profileData.data
    }catch(err){

    }

}

export const UpdateData=async(data,id)=>{
    console.log("first checking",data,id);
    try{
const updatedData=await Tokenrequest.put(`/ardra/Updatedata/${id}`,data)
console.log("updated Data",updatedData);
    }catch(err){
        console.log(err);
    }
}



