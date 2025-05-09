'use client'

import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

const FooterComponent = () => {
  return (
    <footer className="w-full bg-white/5 backdrop-blur-md border-t border-white/10 py-6 mt-12 innerGlow text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-4 text-center md:text-left">
        
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-lg text-sky-300" />
          <a href="mailto:juan4hredia@gmail.com" className="hover:underline">
            juan4hredia@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-2">
          <FaPhone className="text-lg text-sky-300" />
          <a href="tel:+12095180172" className="hover:underline">
            +1 (209) 518-0172
          </a>
        </div>

      </div>
    </footer>
  )
}

export default FooterComponent