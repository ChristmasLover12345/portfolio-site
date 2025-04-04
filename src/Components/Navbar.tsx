'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {

    const router = useRouter()

    // router.push('/Home')

  return (
    <div className='w-full flex flex-row justify-end text-white p-2'>

        <button className='mx-2'>Home</button>

        <button className='mx-2'>Work</button>

        <button className='mx-2'>Projects</button>

    </div>
  )
}

export default Navbar