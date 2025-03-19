import React from "react";
import UserConext from "./UserContext";
import { useState } from "react";

const UserContextProvider=({children})=>{
    const [user,setUser]=useState(null);

    return(
        <UserConext.Provider value={{user,setUser}}>
            {children}
        </UserConext.Provider>
    )
}
export default UserContextProvider;