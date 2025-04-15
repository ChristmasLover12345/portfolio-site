'use client'


import { MediaCardProps } from '@/utils/interface';
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react'

const JobBarComponent = ({
  background,
  imageOnRight,
  LogoUrl,
  LogoSize,
  Description,
  textColor,
  ButtonColor,
  cardTitle,
  cardImageUrl,
  cardVideoUrl,
  cardAudioUrl,
  LearnMoreUrl,
  CompanyLink
}: MediaCardProps) => {

   const [hovered, setHovered] = useState(false);
      const videoRef = useRef<HTMLVideoElement>(null);
      const audioRef = useRef<HTMLAudioElement>(null);
      const router = useRouter()
  
      const handleMouseEnter = () => {
        setHovered(true);
        videoRef.current?.play();
        audioRef.current?.play();
      };
    
      const handleMouseLeave = () => {
        setHovered(false);
        videoRef.current?.pause();
        videoRef.current!.currentTime = 0;
        audioRef.current?.pause();
        audioRef.current!.currentTime = 0;
      };

      const handleLearnMoreClick = () => {
        router.push(LearnMoreUrl)
      }

     

  return (
    
    <div className={`relative flex w-full flex-col md:flex-row md:justify-around h-auto md:h-[500px] p-4 md:p-8 ${background} ${imageOnRight ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
    
    <a href={CompanyLink} target='_blank' className="self-start md:self-auto">
      <img 
        src={LogoUrl} 
        alt="logo" 
        className={`${LogoSize} md:absolute ${imageOnRight ? 'md:start-5 md:top-5' : 'md:end-5 md:top-5'} mb-4 md:mb-0`}
      />
    </a>

   
    <div 
      className="relative w-full md:w-[40%] h-64 sm:h-80 md:h-[90%] mt-4 md:mt-0 self-center rounded-2xl overflow-hidden shadow-lg group cursor-pointer transform transition-transform duration-300 hover:scale-105"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
    
      <img
        src={cardImageUrl}
        alt={cardTitle}
        className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
          hovered ? "opacity-0" : "opacity-100"
        }`}
      />

     
      <video
        ref={videoRef}
        src={cardVideoUrl}
        muted
        loop
        className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      />

     
      <div className="absolute bottom-4 left-4 z-10">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold drop-shadow-md">{cardTitle}</h2>
      </div>

      
      <audio loop ref={audioRef} src={cardAudioUrl} />
    </div>

    
    <div className='flex flex-col w-full md:w-[55%] mt-6 md:mt-0 self-center h-auto md:h-full items-center justify-end'>
      {/* Description */}
      <div className='w-full h-auto md:h-[80%] overflow-hidden pb-2'>
        <h3 className={`text-lg sm:text-xl md:text-2xl font-semibold ${textColor} text-center md:${imageOnRight ? 'text-start' : 'text-end'}`}>
          {Description}
        </h3>
      </div>

     
      <div className={`flex w-full h-auto md:h-[10%] justify-center md:${imageOnRight ? 'justify-start' : 'justify-end'} mt-4 md:mt-0`}>
        <button 
          onClick={handleLearnMoreClick} 
          className={`rounded-lg ${ButtonColor} ${textColor} border-[1px] shadow-lg md:shadow-2xl px-4 py-2 cursor-pointer transform transition-transform duration-300 hover:scale-105`}
        >
          Learn More
        </button>
      </div>
    </div>
  </div>

  )
}

export default JobBarComponent