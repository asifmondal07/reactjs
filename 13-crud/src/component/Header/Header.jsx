import React, {useEffect } from 'react'
import {Container} from '../index'
import { useNavigate,Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import {login,logout} from '../../store/authSlice.js'
import LogoutBtn from './LogoutBtn'
import {token1234} from '../../key/key.js'


export default function Header() {
    const authStatus = useSelector((state) => state.auth?.status)
const navigate = useNavigate()
const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem(token1234)
    const userData = JSON.parse(localStorage.getItem('userData')) // Get user data from local storage
    // console.log('token12',token)
      if(token && !authStatus){
          dispatch(login({
            token:token,
            userData:userData
          }))
      }else if(!token && authStatus){
          dispatch(logout())
      }
  }
  ,[navigate,dispatch])

    const navItems=[
        {name:'Home',path:'/',active:true},

        {name:'Login',path:'/login',active:!authStatus},

        {name:'Signup',path:'/signup',active:!authStatus},

        {name:'Add Post',path:'/addpost',active:authStatus},

    ]
  return (
    <header className='bg-amber-100 shadow-md'>
      <Container>
        <div className='flex justify-between items-center py-4'>
          <h1 className='text-2xl font-bold'>My Blog</h1>
          <nav className='flex space-x-4'>
            {navItems
            .filter((item) => item.active)
            .map((item) =>(
              <button
                key={item.name}
                to={item.path}
                className={`text-lg inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full ${item.active ? 'text-blue-500' : 'text-gray-700'}`}
                onClick={() => {
                  if (item.active) {
                    navigate(item.path)
                  }
                }}
              >
                {item.name}
              </button>
            ))}
            { authStatus && (
              <Link
                to='/'
                className='text-lg text-red-500'
                onClick={() => {
                  navigate('/')
                }}
              >
                  <LogoutBtn />
              </Link>
            )}
          </nav>
        </div>
      </Container>
    </header>
  )
}
