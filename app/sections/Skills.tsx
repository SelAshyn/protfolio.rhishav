import React from 'react'
import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws, FaFigma, FaLinux   } from "react-icons/fa";
import { AiOutlinePython } from "react-icons/ai";
import { TbBrandNextjs, TbSql } from "react-icons/tb";
import { GrHtml5 } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";


  const setskills = [
    { name: "Python", status: "Intermediate", icon: AiOutlinePython },
    { name: "React", status: "Experienced", icon: FaReact },
    { name: "Next.js", status: "Experienced", icon: TbBrandNextjs },
    { name: "Node.js", status: "Intermediate", icon: FaNodeJs },
    { name: "Flask", status: "Basic", icon: AiOutlinePython },
    { name: "HTML/CSS", status: "Experienced", icon: GrHtml5 },
    { name: "Git", status: "Experienced", icon: FaGitAlt },
    { name: "Docker", status: "Basic", icon: FaDocker},
    { name: "AWS", status: "Basic", icon: FaAws },
    { name: "MongoDB", status: "Basic", icon: SiMongodb },
    { name: "SQL", status: "Basic", icon: TbSql },
    { name: "Figma", status: "Basic", icon: FaFigma  },
    { name: "Linux", status: "Basic", icon: FaLinux  },
  ]

const Skills = () => {
  return (
    <div className={`scroll-reveal w-full flex flex-col align-middle items-center justify-center px-4 md:px-8 py-16 md:py-24 min-h-[calc(100vh-64px)] relative`}>
      <div className='max-w-7xl text-center text-white'>
        <h1 className= "text-5xl text-orange-600 font-bold">Skills</h1>
        <div>
          <p className='text-sm mt-4 text-gray-300'>Here are some of the technologies and tools I have experience with:</p>
          <div className='mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-14 justify-center'>
            {setskills.map((skill, index) => (
              <div key={index} className={`flex flex-col items-center justify-center py-10 px-6 rounded-lg shadow-md transition-all duration-300  ${skill.status === "Experienced" ? 'bg-orange-600/20 text-orange-300 hover:rotate-[-10deg] hover:scale-115' : skill.status === "Intermediate" ? 'bg-blue-600/40 text-blue-300 hover:rotate-[-5deg] hover:scale-110' : 'bg-gray-800 hover:rotate-[-2deg] hover:scale-105 text-white'}`}>
                {skill.icon ? <skill.icon className="text-4xl mb-4" /> : null}
                <h2 className="text-xl tracking-wide font-semibold mb-2">{skill.name}</h2>
              </div>
            ))}

          </div>
          <p className="text-xs mt-10 tracking-widest text-gray-400">Orange = Experienced | Blue = Intermediate | Gray = Basic</p>
        </div>
      </div>
    </div>
  )
}

export default Skills
