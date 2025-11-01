import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar ">
      <div className="container ">
        {/* Logo / Name */}
        <a href="#" className="logo-text">
           Ibrahim 
        </a>

        {/* Desktop Menu */}
        <div className="hidden">
          <a href="#about" className="nav-link">
            <i className="fa-solid fa-user mr-2"></i> About
          </a>
          <a href="#projects" className="nav-link">
            <i className="fa-solid fa-folder-open mr-2"></i> Projects
          </a>
          <a href="#contact" className="nav-link">
            <i className="fa-solid fa-envelope mr-2"></i> Contact
          </a>
          <a href="#skills" className="nav-link">
            <i className="fa-solid fa-cogs mr-2"></i> Skills
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
