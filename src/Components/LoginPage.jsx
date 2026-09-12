import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addUser } from '../Utils/userSlice'
import { useNavigate } from 'react-router'
import {BASE_URL} from '../Utils/constants'


const LoginPage = () => {
    const [emailId,setEmailId] = useState("dhoni@gmail.com")
    const [password,setPassword] = useState("Dhoni@123")
    const [error,setError] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogin = async ()=>{
      try{
        const UserData = await axios.post( BASE_URL + "/login",{
          emailId,
          password
        },{withCredentials:true})
        dispatch(addUser(UserData.data))
          navigate("/feed")
      }
      catch(err){
        setError(err?.response?.data)
        console.log({err})
      }
    }
  return (
    <div className='flex justify-center my-10'>
    <div className="card bg-base-200 w-96 shadow-sm">
    <div className="card-body space-y-5">
        <h2 className="card-title justify-center">Login</h2>
        <label className="floating-label">
        <span>Your Email</span>
        <input type="text" placeholder="mail@site.com" className="input input-md"
          value={emailId}
          onChange={(e)=>setEmailId(e.target.value)}
        />
      </label>
      <label className="floating-label">
        <span>Your password</span>
        <input type="text" placeholder="password" className="input input-md" 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
      </label>
        <p className='text-red-600'>{error}</p>
        <div className="card-actions justify-center">
        <button className="btn btn-primary" onClick={handleLogin}>Login</button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default LoginPage
