import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ecommerceImg from "../assets/ecommerce.png";
import traviles from "../assets/traviles.png"

const projects = [
  {
    title: "E-Commerce Website",
    desc: "Modern online store with cart, filtering, and secure payments.",
    img: ecommerceImg,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sibrahim14",
    demo: "https://srkmart.vercel.app/",
  },
  
  {
    title: "Car travils Website",
    desc: "Personal traviles wabsyte built using Next.ts .",
    img: traviles,  
    tags: ["Next.js", "css", "Typescript"],
    github: "https://github.com/sibrahim14",
    demo: "#",
  },
  // {
  //   title: "Weather App",
  //   desc: "Responsive weather app using real-time API integration.",
  //   img: "https://cdn.dribbble.com/userupload/8788123/file/original-2d3a8b7b98.png",
  //   tags: ["HTML", "CSS", "API"],
  //   github: "https://github.com/sibrahim14",
  //   demo: "#",
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section tracking-in-expand-fwd-bottom">
      <h2 className="projects-title">fullstack Work</h2>
      <p className="projects-subtitle">
        A showcase of my recent projects demonstrating expertise in full-stack
        development, modern frameworks, and creative problem-solving.
      </p>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <img src={p.img} alt={p.title} className="project-img" />
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.desc}</p>

            <div className="project-tags">
              {p.tags.map((tag, idx) => (
                <span key={idx} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn">
                <FaGithub /> GitHub
              </a>
              <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn demo">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
