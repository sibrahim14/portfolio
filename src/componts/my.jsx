import React from "react";
import portfolioImg from "../assets/portfolio_img.jpg";
import TextType from "./texttype"; // 👈 Import your typing animation component

const My = () => {
  return (
    <div className="w-full">
      <div className="mypage">
        {/* 👇 Heading Section */}
        <h1 className="head text-type">
          Hi, I'm <span className="text-white">SHAIK IBRAHIM</span>
        </h1>

        {/* 👇 Typing Animation Role Section */}
        <p className="role text-xl text-gray-300 mt-2">
          <TextType
            text={[
              "Fullstack Developer",
              "React Enthusiast",
              "Creative Coder",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </p>

        {/* 👇 Profile Image */}
        <div className="myimg mt-8">
          <img
            src={portfolioImg}
            alt="Profile"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* 👇 Buttons Section */}
        <div className="space-x-4 mt-8">
          <a href="#projects" className="work">
            View My Work
          </a>
          <a href="#contact" className="contact">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default My;
