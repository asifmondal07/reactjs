import React from 'react'
import UserConext from '../context/UserContext'
import { useContext } from 'react'

function Profile() {
     const {user} = useContext(UserConext)
        if(!user) return <div>PLease Login</div>
     return (
    <div>Welcone : {user.username} </div>
  )
}

export default Profile