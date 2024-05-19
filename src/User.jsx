import React, { useContext } from 'react'
import { UserContext } from './Context/Context'
import { Link } from 'react-router-dom';
export default function User() {
  let {data}=useContext(UserContext);
  

  return (
   <div>

    <div className='flex flex-col  w-1/3 text-center border-2 mx-auto mt-16'>
        {data.map((item)=> <Link to={`/user/${item.id}`} key={item.id} className=' bg-red-300 p-3 m-2 '  >{item.name}</Link>  )}
    </div> 

    </div>
  )
}
