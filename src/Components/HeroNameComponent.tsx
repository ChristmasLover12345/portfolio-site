"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/AuroraBackgroundComponent";

const HeroNameComponent = () => {
  return (
    <AuroraBackground>
      <div className="w-full min-h-[600px] flex flex-col justify-center items-center rounded-2xl shadow-lg p-8 innerGlow">
        <motion.div
          initial={{ opacity: 0}} //Starter point, where the animation start
          animate={{ opacity: 1}} //edning point
          transition={{ duration: 0.6, delay: 0.3 }} //Duration of the animation
          className="  flex flex-col justify-center items-center
          text-white text-center
          w-full max-w-4xl"
        >
          <h3 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">
            Welcome! my name is Juan Heredia.
          </h3>
          <h1 className="text-2xl md:text-4xl text-sky-200 font-bold mt-2 drop-shadow-sm">
            I am a Full Stack Developer
          </h1>
        </motion.div>
      </div>
    </AuroraBackground>
  );
};

export default HeroNameComponent;
