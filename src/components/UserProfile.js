import { useContext } from 'react'
import React from 'react'
import { UserContext } from "./App"

const UserProfile = () =>{
    const localvar = useContext(UserContext);
    return(
        <>
        <h1 id='name'>Name:-{localvar.name}</h1>
        <h1 id='age'>Age:-{localvar.age}</h1>
        </>
    )
}

export {UserProfile}