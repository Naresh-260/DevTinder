import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../Utils/constants'
import { addUser } from '../Utils/userSlice'
import FeedCard from './FeedCard'

const EditProfile = ({user}) => {
    
    const dispatch = useDispatch()

    const [firstName, setFirstName] = useState(user.firstName)
    const [lastName, setLastName] = useState(user.lastName)
    const [age, setAge] = useState(user.age)
    const [PhotoUrl, setPhotoUrl] = useState(user.PhotoUrl)
    const [Bio, setBio] = useState(user.Bio)
    const [skills, setSkills] = useState(user.skills)
    const [error, setError] = useState("")
    const [showToast,setShowToast] = useState(false)


    const handleSave = async () => {
        setError("")
        try {
        const res = await axios.patch(
            BASE_URL + "/profile/edit",
            {
                firstName,
                lastName,
                age,
                PhotoUrl,
                Bio,
                skills
            },
            { withCredentials: true }
        )
            dispatch(addUser(res?.data))
            setShowToast(true)
            setTimeout(()=>{
                setShowToast(false)
            },3000)
        } catch (err) {
            console.log(err?.response?.data)
            setError(err?.response?.data || "Something went wrong")
        }
    }

    if (!user) {
        return (
            <div className="flex justify-center items-center py-20">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
    }

    return (
        <>
        <div className='flex justify-center space-x-5'>
        <div className="flex justify-center items-center py-10">
            <div className="card w-full max-w-md bg-base-300 shadow-2xl rounded-2xl">
                <div className="card-body gap-3">
                    <h2 className="text-2xl font-bold text-center mb-2">Edit Profile</h2>

                    <label className="form-control">
                        <span className="label-text mb-1">First Name</span>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </label>

                    <label className="form-control">
                        <span className="label-text mb-1">Last Name</span>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </label>

                    <label className="form-control">
                        <span className="label-text mb-1">Age</span>
                        <input
                            type="number"
                            className="input input-bordered w-full"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </label>

                    <label className="form-control">
                        <span className="label-text mb-1">Photo URL</span>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            value={PhotoUrl}
                            onChange={(e) => setPhotoUrl(e.target.value)}
                        />
                    </label>

                    <label className="form-control">
                        <span className="label-text mb-1">Bio</span>
                        <textarea
                            className="textarea textarea-bordered w-full"
                            rows={3}
                            value={Bio}
                            onChange={(e) => setBio(e.target.value)}
                        />
                    </label>

                    <label className="form-control">
                        <span className="label-text mb-1">Skills (comma separated)</span>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            placeholder="e.g. React, Node, SQL"
                            value={skills}
                            onChange={(e) => setSkills( e.target.value.split(",")
                            .map((skill) => skill.trim())
                            ) }
                        />
                    </label>

                    {error && <p className="text-error text-sm">{error}</p>}

                    <div className="card-actions justify-end mt-4">
                        <button className="btn btn-primary w-full" onClick={handleSave}>
                            Save Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <FeedCard user={{ firstName, lastName, age, PhotoUrl, Bio, skills}} />
        </div>


        {showToast && <div className="toast toast-top toast-center z-[9999] mt-16">
            <div className="alert alert-success">
                <span>Profile Updated successfully.</span>
            </div>
        </div>}

    </>

    )
}

export default EditProfile