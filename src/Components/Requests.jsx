import React from 'react'
import  { useEffect } from 'react'
import { BASE_URL } from '../Utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { addRequests, removeUserRequest } from '../Utils/requestSlice'

const Requests = () => {

    const dispatch = useDispatch()
    const userRequestsFromRedux = useSelector(store=>store.requests)

    const Userrequests = async ()=>{
        try{
        const res = await axios.get(BASE_URL + "/user/requests/received",{withCredentials:true})
        dispatch(addRequests(res.data))
        console.log(res.data)
        }
        catch(err){
            console.log(err.message)
        }
    }
    useEffect(()=>{
        if(!userRequestsFromRedux){
            Userrequests()
        }
    },[])

    const handleRequest = async (status,resquestId)=>{

        await axios.post(BASE_URL + "/request/review/" + status + "/" + resquestId,
            {},{withCredentials:true})
        dispatch(removeUserRequest(resquestId))

    }
  return (
    <div>
        <h1 className='font-bold text-center text-3xl mt-5'>MY Requests</h1>
        <div className=''>
        {userRequestsFromRedux && userRequestsFromRedux.map(request=>{
            const {firstName,lastName,age,Bio,PhotoUrl,skills} = request.fromUserId    
            return(
                <div className='flex space-x-5 items-center my-5 bg-base-300 w-1/2 mx-auto
                    rounded-full' 
                 id='connection._id'>

            <div className="w-40 h-40 shrink-0">
                <img
                    src={PhotoUrl}
                    alt={`${firstName} ${lastName}`}
                    className="w-full h-full rounded-full object-cover"
                />
            </div>
                <div className='space-y-3'>
                    <h1 className='font-bold'>{firstName + " " + lastName}</h1>
                    <p>{Bio}</p>
                </div>
                <button className="btn btn-secondary" onClick=
                {() => handleRequest("rejected", request._id)}>Reject</button>
                <button className="btn btn-accent" onClick=
                {() => handleRequest("accepted", request._id)}>Accept</button>

            </div>
            )
        })}
        
        </div>
    </div>
  )
}

export default Requests
