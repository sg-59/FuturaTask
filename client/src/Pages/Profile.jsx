import React, { useEffect, useState } from 'react'
import { GetprofileData } from '../Api'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
const Profile = () => {
    const [profile,setProfile]=useState()

    const navigate=useNavigate()

    const Datas=useSelector((state)=>state.userInfo.personelData[0])
if(Datas){
    var id=Datas._id
}

// setTimeout(()=>{
// navigate('/')
// },3000)




    useEffect(()=>{
      async function display(){
            var profileInfo=await GetprofileData(id)
            console.log(">>>>>>>>>>>>",profileInfo);
            setProfile(profileInfo)
        }
     display()
    },[])
    
    console.log("profile data**",profile);
  return (
    <div>
        <h1>Profile page</h1>
        <h3>{profile && profile.Username}</h3>
        <h3>{profile && profile.Email}</h3>
        <h3>{profile && profile.Address}</h3>
        <h3>{profile && profile.City}</h3>
        <h3>{profile && profile.Mob}</h3>
        <img src={`/Images/${profile && profile.image}`} alt="" />
      <Link to={`/update/${id}`}><button>Move to update page</button></Link>
    </div>
  )
}

export default Profile