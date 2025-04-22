'use client'

import React from 'react'

const HeroImageComponent = () => {
  return (

    <div className='bg-gray-900 w-full h-[700px] items-center flex md:flex-row flex-col md:justify-around justify-center relative'>

      <img className='h-full w-full absolute z-0' src="./images/hueco mundo.png" alt="" />

      <div className='z-10'>
        <h2 className='text-white text-3xl'>Juan Heredia</h2>
        <h3 className='text-white text-2xl'>QuincyK till my bones decay o algo like that</h3>
      </div>

      <img className='h-[600px] w-[300px] z-10' src="./images/MECahtbt.png" alt="a picture of me" />

    </div>
  )
}

export default HeroImageComponent