import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import { BASE_URL } from '../Utils/constants'
import { removeUser } from '../Utils/userSlice'
import axios from 'axios'

const NavBar = () => {
  const user = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogOut = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true })
      dispatch(removeUser())
      navigate("/login")
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-2xl font-bold tracking-tight">
          Dev<span className="text-primary">Tinder</span>
        </Link>
      </div>

      {user && (
        <div className="flex gap-4 items-center">
          <p className="text-base font-medium hidden sm:block">
            Welcome, {user.firstName}
          </p>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img alt={user.firstName} src={user.PhotoUrl} />
              </div>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge badge-primary">New</span>
                </Link>
              </li>
              <li><a>Settings</a></li>
              <li><a onClick={handleLogOut} className="text-error">Logout</a></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default NavBar