// src/components/Main.js
import React from 'react';
import Education from './Education';
import Experience from './Experience';
import '../styles/Main.css';

const Main = () => {
  return (
    <div className="main-container">
      <div className="left-panel">
        <Education />
      </div>
      <div className="right-panel">
        <Experience />
      </div>
    </div>
  );
};

export default Main;
