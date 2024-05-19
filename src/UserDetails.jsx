import React, { useContext } from 'react'
import { UserContext } from './Context/Context'
import { useParams } from 'react-router-dom';

export default function UserDetails() {
  const{id}=useParams()
  let {data}=useContext(UserContext);
  console.log(data[id]);
  // let newData=data.filter((item)=> item.id === uid )

  return (
    <div className='text-4xl flex flex-col gap-4 mt-20'>
      <p className='bg-yellow-300 mx-auto  w-1/3 text-center p-3' >Name:{data[id].name}</p>
      <p className='bg-yellow-300 mx-auto  w-1/3 text-center p-3' >Age:{data[id].Age}</p>
      <p className='bg-yellow-300 mx-auto  w-1/3 text-center p-3' >City:{data[id].City}</p>
    </div>
  )
}
