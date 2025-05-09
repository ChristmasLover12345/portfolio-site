"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "RIDE – Social Platform for Motorcyclists",
    status: "In Progress",
    description:
      "Team project building a full-stack web app where motorcyclists can discover and share scenic routes. I’m primarily responsible for the backend, including the C#/.NET REST API, designing and implementing the SQL database schema, and building backend services for user and route management.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "C#", "SQL", "Azure"],
    github: "https://github.com/ChristmasLover12345/LoginAPI",
    live: "",
  },
  {
    title: "Quiz Web App – User-Generated Quiz Platform",
    status: "In Progress",
    description:
      "Users can register, take, and create quizzes. Frontend in Next.js/TypeScript. Backend in C# with REST APIs. Robust SQL structure supports quizzes and user data.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "C#", "SQL", "Azure"],
    github: "",
    live: "",
  },
  {
    title: "Personal Portfolio Website",
    status: "You are here",
    description:
      "This portfolio website built with Next.js, TypeScript, and Tailwind CSS. Fully responsive, animated with Framer Motion, and includes dynamic components.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/ChristmasLover12345/portfolio-site",
    live: "",
  },
  {
    title: "Pokémon API Explorer",
    status: "Completed",
    description:
      "React app that uses the PokeAPI to fetch and display Pokémon names, locations, types, evolutions, moves, and abilities.",
    tech: ["React", "JavaScript", "Tailwind CSS", "Azure"],
    github:
      "https://github.com/ChristmasLover12345/herediaj-pokemon-api-rebuilt",
    live: "https://herediaj-pokemon-api-rebuilt.vercel.app",
  },
];

const ProjectsSectionComponent = () => {
  return (
    <section className="w-[98%] mx-auto py-16 px-4 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-white/5 hover:bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-md flex flex-col gap-4 innerGlow"
          >
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-sm text-sky-300">{project.status}</p>
            <p className="text-white/90">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-2 text-sm">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-sky-800/60 px-2 py-1 rounded-md text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-sky-400"
                >
                  <FaGithub />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-sky-400"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSectionComponent;
