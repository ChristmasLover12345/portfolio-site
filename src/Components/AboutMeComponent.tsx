"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaJsSquare,
  FaReact,
  FaGithub,
  FaSlack,
  FaLanguage,
  FaMicrosoft,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { AiOutlineApi } from "react-icons/ai";
import { GrDatabase } from "react-icons/gr";

const skills = [
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <FaReact /> },
  { name: "React Native", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "C#", icon: <TbBrandCSharp /> },
  { name: "REST APIs", icon: <AiOutlineApi /> },
  { name: "SQL", icon: <GrDatabase /> },
  { name: "Azure", icon: <FaMicrosoft /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Slack", icon: <FaSlack /> },
  { name: "English & Español", icon: <FaLanguage /> },
];

const AboutMeComponent = () => {
  return (
    <div className="w-full py-12 flex flex-col items-center gap-12">
      {/* About Me Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-[95%] sm:w-[90%] px-4 mx-auto bg-white/5 hover:bg-white/20 backdrop-blur-md rounded-2xl shadow-lg p-8 innerGlow text-white text-center"
      >
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-white/80 leading-relaxed">
          I'm Juan Heredia, a bilingual (English & Spanish) Full Stack Developer
          passionate about building modern, scalable web applications. I love
          learning and pushing the limits of what's possible with code. My
          favorite tools include Next.js, C#, SQL, and Tailwind CSS — and I'm
          always eager to contribute to impactful projects.
        </p>
      </motion.div>

      {/* Skills Carousel Section */}
      <div className="relative w-full max-w-screen overflow-hidden px-4">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {[...skills, ...skills].map((skill, idx) => (
            <div
              key={idx}
              className="min-w-[120px] h-[120px]  bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 
              rounded-xl flex flex-col items-center justify-center text-white shadow-md transition-all duration-300"
            >
              <div className="text-3xl mb-2">{skill.icon}</div>
              <span className="text-sm text-center">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMeComponent;
