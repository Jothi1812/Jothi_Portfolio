// src/components/Projects.js
import React from 'react';
import '../styles/Projects.css';

const ProjectCard = ({ title, description, technologies, duration, githubLink }) => (
  <div className="project-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <p><strong>Technologies:</strong> {technologies}</p>
    <p><strong>Duration:</strong> {duration}</p>
    <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "GST Management System",
      description: "Angular-based GST management app for storing user data in MongoDB, retrieving individual details, and processing GST payments.",
      technologies: "Angular, Node.js, MongoDB",
      duration: "1 Month",
      githubLink: "https://github.com/Jothi1812/gst_managenent"
    },
    {
      title: "HR Management System",
      description: "A Java-based HR Management System using AWT for GUI, allowing role-based employee data management with custom panel navigation and image integration.",
      technologies: "Java, AWT",
      duration: "3 Months",
      githubLink: "https://github.com/Jothi1812/Java-Project"
    },
    {
      title: "SAP Point Calculation",
      description: "A Python program for managing student data and event points using MySQL, including functionality for admins and students to add and view data.",
      technologies: "Python, MySQL",
      duration: "3 Months",
      githubLink: "https://github.com/Jothi1812/Python-Project"
    },
    {
        title: "Fingerprint Based ATM System",
        description: "A React-based web app for fingerprint authentication, cash withdrawal, money transfer, and transaction history.",
        technologies: "React, Node.js, MySQL, Fingerprint Authentication",
        duration: "2 Months",
        githubLink: "https://github.com/Jothi1812/Fingerprint-ATM-System"  
    },
    {
      title: "Audio to Text Translator",
      description: "A Python application that converts audio input into text using speech recognition and natural language processing.",
      technologies: "Python, SpeechRecognition, Pyaudio, Natural Language Processing",
      duration: "1 Month",
      githubLink: "https://github.com/Jothi1812/Audio-to-Text-Translator"
    },
    {
      title: "Employee Management System",
      description: "A React-based application for managing employee data, including adding, editing, and deleting employee records, with role-based access and reporting features.",
      technologies: "React, Node.js, MongoDB",
      duration: "3 Months",
      githubLink: "https://github.com/Jothi1812/EmployeeManagementSystem"
    }
    
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;