import React from 'react'

import { useState ,useContext} from 'react'
import UserConext from '../context/UserContext'

function Login() {
    const [username,setUserName]=useState("")
    const [password,setPassword]=useState("")

    const {setUser}=useContext(UserConext)
    const submitBtn=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
        <h1>Login Page</h1>
        <input type="text" 
        value={username}
        onChange={(e)=>setUserName(e.target.value)}
        placeholder='username'  />
        < > </>
        <input type="text" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='password'/>
        <button onClick={submitBtn}>Login</button>
    </div>
  )
}

export default Login