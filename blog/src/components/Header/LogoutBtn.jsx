// import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import authService from '../../appwrite/auth'


function LogoutBtn() {
const dispatch=useDispatch()

    const handleLogout=()=>{
        authService.logout()
        .then(()=>{
            dispatch(logout())
        })
    }
  return (
<button onClick={handleLogout} className=' text-xl  text-blush border-[1px] border-blush font-medium rounded-full py-2 w-[200px] text-center buttonGlow '>Logout</button>  
)
}

export default LogoutBtn