'use client'

import React from 'react'
import GitHub_Logo from '../../public/images/GitHub_Logo.webp'
import linkedin_logo from '../../public/images/linkedin_logo.png'
import resumeIcon from '../../public/images/resumeIcon.png'
import { motion } from 'framer-motion'
import Image from 'next/image'

const ContactBubblesComponent = () => {
  return (
    <div className='fixed top-0 z-10 right-3 flex flex-col w-[80px] h-screen gap-2 items-center justify-center'>

    <motion.div
        initial={{ opacity: 0, x: 30}} //Starter point, where the animation start
        animate={{opacity: 1, x:0}} //edning point
        transition={{
          delay: 1,
          duration: 1
        }} //Duration of the animation
        className=' bg-white/5 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-3xl shadow-lg p-2 innerGlow'
        >
            <a href="https://github.com/ChristmasLover12345" target='_blank' >
                <Image src={GitHub_Logo} alt='The GitHub Logo' className='h-[50px] w-[50px]'/>
            </a>
          
          

    </motion.div>

         {/* Resume Button */}
    <motion.div
        initial={{ opacity: 0, x: 30}} //Starter point, where the animation start
        animate={{opacity: 1, x:0}} //edning point
        transition={{
          delay: 1,
          duration: 1
        }} //Duration of the animation
        className=' bg-white/5 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-3xl shadow-lg p-2 innerGlow'
        >

          <Image src={resumeIcon} alt='The GitHub Logo' className='h-[50px] w-[50px]'/>
          
    </motion.div>


        {/* LinkdIn Button */}
    <motion.div
        initial={{ opacity: 0, x: 30}} //Starter point, where the animation start
        animate={{opacity: 1, x:0}} //edning point
        transition={{
          delay: 1,
          duration: 1
        }} //Duration of the animation
        className=' bg-white/5 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-3xl shadow-lg p-2 innerGlow '
        >

            <a href="https://www.linkedin.com/in/juan-heredia-77a135358/" target='_blank' >
                <Image src={linkedin_logo} alt='The GitHub Logo' className='h-[50px] w-[50px]'/>
            </a>

         
          
    </motion.div>

    </div>
  )
}

export default ContactBubblesComponent