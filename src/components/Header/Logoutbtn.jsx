import React from 'react'
import {useDispatch} from 'react-redux'
import authService from "../../appwrite/auth"
import {logout} from "../../store/authSlice"
import { useNavigate } from 'react-router-dom'


function Logoutbtn() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
    const logoutHandler = ()=> {
        authService.logout().then(() => {
            dispatch(logout())
            // navigate("/login");
        })
    }
  return (
    <div>
      <button className='inline-bock px-1 py-2 duration-200 max-smmd:text-[11px] smmd:px-4 hover:bg-white/10 hover:backdrop-blur-md hover:shadow-md hover:font-semibold cursor-pointer rounded-lg sm:px-6' onClick={logoutHandler}>Logout</button>
    </div>
  )
}

export default Logoutbtn
