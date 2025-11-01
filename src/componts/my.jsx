import React from 'react';
import portfolioImg from '../assets/portfolio_img.jpg';


const My = () => {
  return (
    <div className="w-full">
      <div className="mypage">
        <h1 className="head">
          Hi, I'm <span className="text-white">SHAIK IBRAHIM</span>
        </h1>
        <p className="role">
          Fullstack Developer
        </p>

        <div className="myimg">
          <img src={portfolioImg} alt="Profile" className="w-full h-full object-cover object-center" />
        </div>

        <div className="space-x-4">
          <a href="#projects" className="work">View My Work</a>
          <a href="#contact" className="contact">Contact Me</a>
        </div>
      </div>
    </div>
  );
};

export default My;