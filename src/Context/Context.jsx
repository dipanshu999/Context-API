import React, { createContext } from 'react'
export const UserContext = createContext()
export default function Context({children}) {
    
    let a=20;
    const data =[
        {id:0,name:'Dipanshu', Age:25, City:'Delhi'},
        {id:1,name:'Shanaya', Age:22, City:'Mumbai'},
        {id:2,name:'Atul', Age:23, City:'Pune'}
    ]
    
    return <UserContext.Provider value={{data}}> {children} </UserContext.Provider>
 
}
