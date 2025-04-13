import React from 'react'
import authService from '../../Api/auth'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import { token1234 } from '../../key/key.js'

export default function LogoutBtn() {
    const dispatch = useDispatch()
    const handleLogout = async () => {
        try {
            await authService.logout()
            localStorage.removeItem(token1234)
            dispatch(logout())
        } catch (error) {
            console.log("Logout error: ", error)
        }
    }
  return (
    <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={handleLogout}>Logout</button>
  )
}
