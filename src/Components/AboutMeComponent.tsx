"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaJsSquare, FaReact, FaGithub, FaSlack, FaLanguage,
  FaMicrosoft, FaTrello, FaFigma,
} from "react-icons/fa";
import {
  SiTypescript, SiTailwindcss, SiNextdotjs,
  SiHtml5, SiCss3,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { AiOutlineApi } from "react-icons/ai";
import { GrDatabase } from "react-icons/gr";

const skills = [
  { name: "JavaScript", icon: <FaJsSquare />, category: "Frontend" },
  { name: "TypeScript", icon: <SiTypescript />, category: "Frontend" },
  { name: "React", icon: <FaReact />, category: "Frontend" },
  { name: "React Native", icon: <FaReact />, category: "Frontend" },
  { name: "Next.js", icon: <SiNextdotjs />, category: "Frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "Frontend" },
  { name: "HTML", icon: <SiHtml5 />, category: "Frontend" },
  { name: "CSS", icon: <SiCss3 />, category: "Frontend" },
  { name: "C#", icon: <TbBrandCSharp />, category: "Backend" },
  { name: "REST APIs", icon: <AiOutlineApi />, category: "Backend" },
  { name: "SQL", icon: <GrDatabase />, category: "Backend" },
  { name: "Azure", icon: <FaMicrosoft />, category: "Backend" },
  { name: "GitHub", icon: <FaGithub />, category: "Tools" },
  { name: "Figma", icon: <FaFigma />, category: "Tools" },
  { name: "Trello", icon: <FaTrello />, category: "Tools" },
  { name: "Slack", icon: <FaSlack />, category: "Tools" },
  { name: "English & Español", icon: <FaLanguage />, category: "Other" },
];

const categories = ["All", "Frontend", "Backend", "Tools", "Other"];

const AboutMeComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <div className="w-full py-16 px-4 flex justify-center">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-12">
        {/* About Me */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 text-white"
        >
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-white/80 leading-relaxed">
            I&apos;m Juan Heredia, a bilingual (English & Spanish) Full Stack Developer
            passionate about building modern, scalable web applications. I love
            learning and pushing the limits of what&apos;s possible with code. My
            favorite tools include Next.js, C#, SQL, and Tailwind CSS — and I&apos;m
            always eager to contribute to impactful projects.
          </p>
        </motion.div>

        {/* Skills */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          {/* Filter Tabs */}
          <div className="mb-4 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  selectedCategory === cat
                    ? "bg-white text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Scrollable Skills Container */}
          <div
            className="w-full h-[420px] overflow-y-auto bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg p-4"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {filteredSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 
                  rounded-xl flex flex-col items-center justify-center text-white shadow-md p-4 transition-all duration-300"
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <span className="text-sm text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeComponent;
