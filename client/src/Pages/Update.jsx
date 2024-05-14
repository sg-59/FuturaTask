import React, { useState } from 'react'
import { UpdateData } from '../Api'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Update = () => {


    const linkId=useParams()

    console.log("linkId****",linkId.id);
  
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [mob, setMob] = useState()
    const [address, setAddress] = useState()
    const [city, setCity] = useState()
    const [password, setPassword] = useState()
    const [image,setImage]=useState()

    const formdata=new FormData()
    formdata.append('name',name)
    formdata.append('email',email)
    formdata.append('mob',mob)
    formdata.append('address',address)
    formdata.append('city',city)
    formdata.append('password',password)
    formdata.append('image',image)

    function update(){
        UpdateData(formdata,linkId.id)
    }

  return (
    <div className='main'>
    <h1>Update page</h1>
    <form onSubmit={update} encType='multipart/form-data'>
            <div><input type="text" placeholder='username'  onChange={(e) => setName(e.target.value)} /></div>
            <div><input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} /></div>
            <div><input type="text" placeholder='Mob' onChange={(e) => setMob(e.target.value)} /></div>
            <div><input type="text" placeholder='Address' onChange={(e) => setAddress(e.target.value)} /></div>
            <div><input type="text" placeholder='City' onChange={(e) => setCity(e.target.value)} /></div>
            <div><input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} /></div>
            <div><input type="file" filename='images' onChange={(e)=>setImage(e.target.files[0])} /></div>
            <div><input type='submit' value='Update'/></div>
            </form>
</div>
  )
}

export default Update