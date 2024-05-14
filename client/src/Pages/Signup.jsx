import React, { useState } from 'react'
import './signup.css'
import { signupApi } from '../Api'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Signup = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mob, setMob] = useState()
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [password, setPassword] = useState('')
    const [image,setImage]=useState({})

    const formdata=new FormData()
    formdata.append('name',name)
    formdata.append('email',email)
    formdata.append('mob',mob)
    formdata.append('address',address)
    formdata.append('city',city)
    formdata.append('password',password)
    formdata.append('image',image)



   async function display(e){
    e.preventDefault();
    console.log("form data",formdata);
        signupApi(formdata)
    }

    return (
        <div className='main'>
            <h1>Signup page</h1>
            <form onSubmit={display} encType='multipart/form-data'>
            <div><input type="text" placeholder='username'  onChange={(e) => setName(e.target.value)} /></div>
            <div><input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} /></div>
            <div><input type="text" placeholder='Mob' onChange={(e) => setMob(e.target.value)} /></div>
            <div><input type="text" placeholder='Address' onChange={(e) => setAddress(e.target.value)} /></div>
            <div><input type="text" placeholder='City' onChange={(e) => setCity(e.target.value)} /></div>
            <div><input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} /></div>
            <div><input type="file" filename='images' onChange={(e)=>setImage(e.target.files[0])} /></div>
            <div><input type='submit' value='Submit'/></div>
            </form>
          <Link to={'/'}> <p>I have already an a/c</p></Link> 
        </div>
    )
}

export default Signup