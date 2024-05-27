import React, { createContext, useEffect, useState } from 'react'
export const UserContext = createContext()
export default function Context({children}) {
    
    
    const [data,setData] =useState(null);

    let getData=()=>{
        let url='https://jsonplaceholder.typicode.com/users'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setData(data))
        
    }

    useEffect(()=>{
        getData();
    },[])
    
    
    return <UserContext.Provider value={{data,setData}}> {children} </UserContext.Provider>
 
}
