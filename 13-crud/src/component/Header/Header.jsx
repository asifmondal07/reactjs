import React, { act } from 'react'
import {Container} from '../index'
import { useNavigate,Link } from 'react-router-dom'


export default function Header() {
const navigate = useNavigate()

    const navItems=[
        {name:'Home',path:'/home',active:true},

        {name:'Login',path:'/login',active:false},

        {name:'Logout',path:'/logout',active:false},

        {name:'Signup',path:'/signup',active:false},

        {name:'All Posts',path:'/allposts',active:true},

        {name:'Add Post',path:'/addpost',active:false},

    ]
  return (
    <div>Header</div>
  )
}
