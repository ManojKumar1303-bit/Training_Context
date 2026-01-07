import React, { createContext, useState } from 'react'

export const AuthContext=createContext();

const AuthProvider = ({children}) => {

    const[user, setUser]=useState(null);

    const login=(name)=>
    {
        setUser(name);
    }

    const logout =() =>
    {
        setUser(null);
    }

  return (
    <div>
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
