import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Outlet, useNavigate } from 'react-router'
import Footer from './Footer'
import { BASE_URL } from '../Utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../Utils/userSlice'
import axios from 'axios'

const Body = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userData = useSelector(store => store.user)

  const fetchUser = async ()=>{
    try{
      if(!userData){
      const res  = await axios.get(BASE_URL + "/profile/view",{withCredentials:true})
      dispatch(addUser(res))
      }
    }
    catch(err){
      if(err.status === 401){
        navigate("/login")
      }
      console.log(err)
    }
  }

  useEffect(()=>{
      fetchUser();
  },[])
  return (
    <div>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Body
