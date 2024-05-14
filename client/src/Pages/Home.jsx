import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutInfo } from '../Redux/userslice'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const userData=useSelector((state)=>state.userInfo.personelData[0])
  if(userData){
   var id= userData._id
  }

  const [state,setState]=useState({})

console.log("Id where",id);
  const dispatch=useDispatch()



  function logout(){
dispatch(logoutInfo())
  }

 





  return (
    <div>
      <h1>Home</h1>
      <button onClick={logout}>Logout</button>
      <Link to={'profile'}><button>Profile</button></Link>
     <Link to={`update/${id}`}><button>Update</button></Link> 
      <h3>{state.Username}</h3>
      <h3>{state.Email}</h3>
      <h3>{state.Mob}</h3>
      <h3>{state.Address}</h3>
  
    
    </div>
  )
}

export default Home
