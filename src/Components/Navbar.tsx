import { useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {

    const router = useRouter()

    // router.push('/Home')

  return (
    <div className='w-full flex flex-row items-center'>

        <button>Home</button>

        <button>Work</button>

        <button>Projects</button>

    </div>
  )
}

export default Navbar