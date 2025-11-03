import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaJsSquare,
  FaReact,
  FaDatabase,
  FaPython,
  FaCuttlefish, // used for C
} from "react-icons/fa";
import { SiTailwindcss, SiCplusplus, SiFigma } from "react-icons/si";



const Skills = () => {

  const icons = [
   
    { icon: <FaHtml5 className="text-orange-500 text-5xl" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-blue-500 text-5xl" />, name: "CSS" },
    { icon: <FaJava className="text-red-600 text-5xl" />, name: "Java" },
    { icon: <FaJsSquare className="text-yellow-400 text-5xl" />, name: "JavaScript" },
    { icon: <FaReact className="text-cyan-400 text-5xl" />, name: "React" },
    // { icon: <SiTailwindcss className="text-sky-400 text-5xl" />, name: "typescript" },
    { icon: <FaDatabase className="text-green-500 text-5xl" />, name: "SQL" },
    { icon: <FaPython className="text-yellow-500 text-5xl" />, name: "Python" },
    // { icon: <FaCuttlefish className="text-blue-400 text-5xl" />, name: "C" },
    // { icon: <SiCplusplus className="text-blue-600 text-5xl" />, name: "C++" },
    { icon: <SiFigma className="text-pink-500 text-5xl" />, name: "UI/UX" },
  
  ];
  const databases = [
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Supabase",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
    },
  ];  
  return (
      <section id="skills" className="skills-section">
      <h2 className="skills-title">My Skills</h2>

      <div className="wrapper">
        <div className="inner" style={{ "--quantity": icons.length }}>
          {icons.map((item, index) => (
            <div
              key={index}
              className="card"
              style={{
                "--index": index,
                "--color-card": "204, 255, 221  ",
              }}
            >
              <div className="skill-card">
                <div
                  className="skill-icon"
                  style={{ color: item.color }}
                >
                  {item.icon}
                </div>
                <p className="skill-name">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
         {/* Database Section */}
      <div className="database bg-gray-800 py-10 px-6 rounded-2xl shadow-lg max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold text-yellow-400 mb-8">Databases</h3>
        <ul className="flex flex-wrap justify-center gap-10">
          {databases.map((db, index) => (
            <li
              key={index}
              className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
            >
              <img
                src={db.logo}
                alt={db.name}
                className="w-16 h-16 mb-3 rounded-lg"
              />
              <span className="text-lg font-medium">{db.name}</span>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </section>
  );
};
export default Skills;
