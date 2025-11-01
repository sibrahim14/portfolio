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
    { icon: <SiTailwindcss className="text-sky-400 text-5xl" />, name: "typescript" },
    { icon: <FaDatabase className="text-green-500 text-5xl" />, name: "SQL" },
    { icon: <FaPython className="text-yellow-500 text-5xl" />, name: "Python" },
    { icon: <FaCuttlefish className="text-blue-400 text-5xl" />, name: "C" },
    { icon: <SiCplusplus className="text-blue-600 text-5xl" />, name: "C++" },
    { icon: <SiFigma className="text-pink-500 text-5xl" />, name: "UI/UX" },
  
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
                "--color-card": "255, 204, 21",
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
      </div>
    </section>
  );
};
export default Skills;
