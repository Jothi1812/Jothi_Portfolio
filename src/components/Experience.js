// // src/components/Experience.js
// import React from 'react';
// import '../styles/Experience.css';

// const Experience = () => {
//   const experiences = [
//     {
//       company: "TRAINING TRAINS",
//       position: "Software Developer",
//       duration: "Sept 18, 2023 - Sept 24, 2023",
//       description: "Web Development & Designing",
//     },
//     {
//       company: "NXTGEN INSTRUMENTS",
//       position: "Software Developer",
//       duration: "Feb 11, 2024 - Feb 18, 2024",
//       description: "Android App Development",
//     },
//     {
//       company: "RINEX TECHNOLOGY",
//       position: "Software Developer",
//       duration: "3 Months",
//       description: "Web Development",
//     },
//     {
//       company: "INTERNPE",
//       position: "Programmer",
//       duration: "1 Month",
//       description: "Worked on a Java-based Connect 4 game project.",
//     },
//   ];

//   return (
//     <section id="experience" className="experience">
//       <h2>Experience</h2>
//       <div className="experience-list">
//         {experiences.map((exp, index) => (
//           <div key={index} className="experience-item">
//             <h3>{exp.position} at {exp.company}</h3>
//             <p><strong>Duration:</strong> {exp.duration}</p>
//             <p>{exp.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Experience;

// src/components/Experience.js
import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: "TRAINING TRAINS",
      position: "Software Developer",
      duration: "Sept 18, 2023 - Sept 24, 2023",
      description: "Web Development & Designing",
    },
    {
      company: "NXTGEN INSTRUMENTS",
      position: "Software Developer",
      duration: "Feb 11, 2024 - Feb 18, 2024",
      description: "Android App Development",
    },
    {
      company: "RINEX TECHNOLOGY",
      position: "Software Developer",
      duration: "3 Months",
      description: "Web Development",
    },
    {
      company: "INTERNPE",
      position: "Programmer",
      duration: "1 Month",
      description: "Worked on a Java-based Connect 4 game project.",
    },
  ];

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.position} at {exp.company}</h3>
            <p><strong>Duration:</strong> {exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
