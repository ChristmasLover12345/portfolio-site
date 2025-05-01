'use client'

import { motion } from 'framer-motion'
import React from 'react'

const HeroNameComponent = () => {
  return (

   

    <div className='w-full h-[400px] bg-gradient-to-b from-sky-700 to-sky-950 flex flex-col justify-center items-center text-white p-4 '>

 
      <motion.div 
      initial={{ opacity: 0, y: 30}} //Starter point, where the animation start
      animate={{opacity: 1, y:0}} //edning point
      transition={{duration: 1}} //Duration of the animation
      className='w-full h-full flex flex-col justify-center items-center'>

            <h3 className='text-4xl md:text-6xl font-bold'>Welcome! my name is Juan Heredia.</h3>
            <h1 className='text-2xl md:text-4xl font-bold mt-2'>I am a Full Stack Developer</h1>

      </motion.div>


       

    </div>
  )
}

export default HeroNameComponent