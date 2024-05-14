import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { LoginApi } from '../Api'
import {useDispatch} from 'react-redux'
const Login = () => {

  const dispatch=useDispatch()

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

function display(){
console.log(email,password);
LoginApi({email,password},dispatch)
}

  return (
    <div className='main'>
        <h1>Login page</h1>
    <div>  <input type="email"  placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/></div>
     <div> <input type="password"  placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/></div>
     <button onClick={display}>Login</button>
     <Link to={'forgot'}><p style={{color:'blue'}}>Forgotten password ?</p></Link>
    <Link to={'/signup'}><p>Create an account</p></Link>
    </div>
  )
}

export default Login
