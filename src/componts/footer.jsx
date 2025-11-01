import React from "react";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="footer-content ">
        <h3>Ibrahim</h3>
        {/* Center — Quick Links */}
        <ul className="page-links ">
          <li>
            <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-yellow-400 transition-colors">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
          </li>
        </ul>

        {/* Right Side — Social Icons */}
        <div className="social-icons ">
          <a
            href="https://github.com/sibrahim14"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/_lucky__74"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-400"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom Note */}
      <p className="bottom-note ">
        Made with ❤️ using React & Tailwind CSS
      </p>
 {/* Left Side — Logo / Name */}
        <h2 className="footrer-logo ">
          © {new Date().getFullYear()} Ibrahim. All rights reserved.
        </h2>

    </footer>
  );
};

export default Footer;
