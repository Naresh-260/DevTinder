import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../Utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../Utils/connectionsSlice'

const Connections = () => {

    const dispatch = useDispatch()
    const userConnectionsFromRedux = useSelector(store=>store.connections)

    const Userconnections = async ()=>{
        try{
        const res = await axios.get(BASE_URL + "/user/connections",{withCredentials:true})
        dispatch(addConnections(res.data))
        console.log(res.data)
        }
        catch(err){
            console.log(err.message)
        }
    }
    useEffect(()=>{
        if(!userConnectionsFromRedux){
            Userconnections()
        }
    },[])
  return (
    <div>
        <h1 className='font-bold text-center text-3xl mt-5'>MY Connections</h1>
        <div className=''>
        {userConnectionsFromRedux && userConnectionsFromRedux.map(connection=>{
            const {firstName,lastName,age,Bio,PhotoUrl,skills} = connection     
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

            </div>
            )
        })}
        
        </div>
    </div>
  )
}

export default Connections
