import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='flex justify-center pt-4'>
    <ul className='flex gap-6 text-xl '>
     <Link to='/'><li>Home </li>  </Link>
     <Link to='/user'> <li>User</li> </Link>
     <Link to='/about'> <li>About</li> </Link>
    </ul>
    </div>
  )
}
