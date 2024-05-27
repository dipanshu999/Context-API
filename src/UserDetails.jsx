import React, { useContext } from 'react'
import { UserContext } from './Context/Context'
import { useParams } from 'react-router-dom';

export default function UserDetails() {
  const{id}=useParams()
  let {data}=useContext(UserContext);
  //  console.log(data);

  if(!data){
    return <div>Loading...</div>
  }

  let users=data.filter((item)=>item.id === +id)
  console.log(users);
  const user=users[0]

  
  // let newData=data.filter((item)=> item.id === uid )

  return (
    <>
        <div className='text-4xl flex flex-col gap-4 mt-20'>
          <p className='bg-yellow-300 mx-auto  w-1/3 text-center p-3' ><span className='font-bold'>Name:</span>  {user.name}</p>
          <p className='bg-yellow-300 mx-auto  w-1/3 text-center p-3' ><span className='font-bold'>Phone:</span>  {user.phone}</p>
          <p className='bg-yellow-300 mx-auto  w-1/3 text-center p-3' ><span className='font-bold'>City: </span> {user.address.city}</p>
        </div>
  </>
  )
}
