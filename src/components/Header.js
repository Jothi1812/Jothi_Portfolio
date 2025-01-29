// src/components/Header.js
import React from 'react';
import '../styles/Header.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import profilePic from '../assets/profile.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>JOTHI SREE</h1>
        <p>Full Stack Developer | Data Science Enthusiast</p>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="social-links">
          <a href="mailto:jothisree77@gmail.com" target="_blank" rel="noopener noreferrer" data-name="Email">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/jothi-sree-031394259/" target="_blank" rel="noopener noreferrer" data-name="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Jothi1812" target="_blank" rel="noopener noreferrer" data-name="GitHub">
            <FaGithub />
          </a>
          <a href="https://leetcode.com/u/Jothi1812/" target="_blank" rel="noopener noreferrer" data-name="LeetCode">
            <SiLeetcode />
          </a>
        </div>
      </div>
      <div className="profile-container">
        <img src={profilePic} alt="Profile" className="profile-pic" />
      </div>
    </header>
  );
};

export default Header;
