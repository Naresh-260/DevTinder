import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addUser } from '../Utils/userSlice'
import { useNavigate } from 'react-router'
import {BASE_URL} from '../Utils/constants'


const LoginPage = () => {
    const [emailId,setEmailId] = useState("")
    const [password,setPassword] = useState("")
    const [firstName,setFirstName] = useState("")
    const [lastName,setlastName] = useState("")
    const [toggle,setToggle] = useState(true)
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
          navigate("/")
      }
      catch(err){
        setError(err?.response?.data)
        console.log({err})
      }
    }

  const handleSignUp = async ()=>{
    try{
        const UserData = await axios.post( BASE_URL + "/signup",{
          firstName,
          lastName,
          emailId,
          password
        },{withCredentials:true})
        dispatch(addUser(UserData.data))
        navigate("/profile")
      }
      catch(err){
        setError(err?.response?.data)
        console.log({err})
      }
    }
    const handleToggle = ()=>{
      setToggle(!toggle)
      setError("")
    }
  return (
    <div className="min-h-full flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md bg-base-300 rounded-2xl shadow-2xl p-8">
    <div className="card-body space-y-5">
        <h2 className="card-title justify-center">{toggle ? "signup" : "signIn"}</h2>

      {toggle && <><label className="floating-label">
          <span>First Name</span>
          <input type="text" placeholder="Jhon" className="input input-md"
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
          />
        </label>

        <label className="floating-label">
          <span>last Name</span>
          <input type="text" placeholder="Doe" className="input input-md"
            value={lastName}
            onChange={(e)=>setlastName(e.target.value)}
          />
        </label></>}
        
        <label className="floating-label">
        <span>Your Email</span>
        <input type="text" placeholder="jhon@gmail.com" className="input input-md"
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
        <button className="btn btn-primary" onClick={toggle ? handleSignUp : handleLogin}>
        {toggle ? "signup" : "signIn"}</button>
        </div>

        <p className='cursor-pointer mx-auto' onClick={handleToggle}>{toggle ? "existing User? Login Here" : "New User? SignUp Here"}</p>
    </div>
    </div>
    </div>
  )
}

export default LoginPage
