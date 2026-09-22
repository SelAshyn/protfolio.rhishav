'use client'

import React from 'react'
import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws, FaFigma, FaLinux } from "react-icons/fa"
import { AiOutlinePython } from "react-icons/ai"
import { TbBrandNextjs, TbSql } from "react-icons/tb"
import { GrHtml5 } from "react-icons/gr"
import { SiMongodb } from "react-icons/si"
import { useTheme } from '../providers'

const setskills = [
  { name: "Python",    status: "Intermediate", icon: AiOutlinePython },
  { name: "React",     status: "Experienced",  icon: FaReact },
  { name: "Next.js",   status: "Experienced",  icon: TbBrandNextjs },
  { name: "Node.js",   status: "Intermediate", icon: FaNodeJs },
  { name: "Flask",     status: "Basic",        icon: AiOutlinePython },
  { name: "HTML/CSS",  status: "Experienced",  icon: GrHtml5 },
  { name: "Git",       status: "Experienced",  icon: FaGitAlt },
  { name: "Docker",    status: "Basic",        icon: FaDocker },
  { name: "AWS",       status: "Basic",        icon: FaAws },
  { name: "MongoDB",   status: "Basic",        icon: SiMongodb },
  { name: "SQL",       status: "Basic",        icon: TbSql },
  { name: "Figma",     status: "Basic",        icon: FaFigma },
  { name: "Linux",     status: "Basic",        icon: FaLinux },
]

const Skills = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const getSkillClasses = (status: string) => {
    if (status === "Experienced") {
      return isDark
        ? 'bg-orange-600/20 text-orange-300 hover:rotate-[-10deg] hover:scale-[1.15]'
        : 'bg-orange-100 text-orange-700 hover:rotate-[-10deg] hover:scale-[1.15]'
    }
    if (status === "Intermediate") {
      return isDark
        ? 'bg-blue-600/40 text-blue-300 hover:rotate-[-5deg] hover:scale-[1.10]'
        : 'bg-blue-100 text-blue-700 hover:rotate-[-5deg] hover:scale-[1.10]'
    }
    return isDark
      ? 'bg-gray-800 text-white hover:rotate-[-2deg] hover:scale-105'
      : 'bg-gray-200 text-gray-900 hover:rotate-[-2deg] hover:scale-105'
  }

  return (
    <div
      className="w-full flex flex-col items-center justify-center px-4 md:px-8 py-16 md:py-24 min-h-[calc(100vh-64px)] relative"
    >
      <div className={`w-full max-w-6xl text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
        <h1 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-orange-600' : 'text-orange-400'}`}>Skills</h1>
        <p className={`text-sm mt-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Technologies and tools I have experience with:
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 justify-center">
          {setskills.map((skill, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center py-6 px-3 sm:py-8 sm:px-5 rounded-xl shadow-md transition-all duration-300 cursor-default ${getSkillClasses(skill.status)}`}
            >
              {skill.icon && <skill.icon className="text-3xl sm:text-4xl mb-3" />}
              <h2 className="text-sm sm:text-base font-semibold">{skill.name}</h2>
            </div>
          ))}
        </div>

        <p className={`text-xs mt-8 tracking-widest ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Orange = Experienced · Blue = Intermediate · Gray = Basic
        </p>
      </div>
    </div>
  )
}

export default Skills
