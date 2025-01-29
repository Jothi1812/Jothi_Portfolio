import React from 'react';
import '../styles/Education.css';

const Education = () => {
  const education = [
    {
      degree: "B.Tech Information Technology",
      institution: {
        name: "Kongu Engineering College, Perundurai",
        url: "https://www.kongu.edu"
      },
      year: "2022-2026",
      score: "CGPA 9.21"
    },
    {
      degree: "12th Standard",
      institution: {
        name: "Saratha International Senior Secondary School",
        url: "https://sarathainternationalschool.org/"
      },
      year: "2022",
      score: "91.6%"
    },
    {
      degree: "10th Standard",
      institution: {
        name: "Saratha International Senior Secondary School",
        url: "https://sarathainternationalschool.org/"
      },
      year: "2020",
      score: "90.2%"
    }
  ];

  return (
    <section id="education" className="education">
      <div className="education-container">
        <h2>Education</h2>
        <div className="timeline">
          {education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{edu.degree}</h3>
                <a href={edu.institution.url} target="_blank" rel="noopener noreferrer">
                  {edu.institution.name}
                </a>
                <div className="timeline-info">
                  <span>{edu.year}</span>
                  <span className="score">{edu.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;