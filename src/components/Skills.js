// import React, { useState } from 'react';
// import '../styles/Skills.css';
// import cImage from '../assets/C.jpg';
// import javaImage from '../assets/Java.jpg';
// import pythonImage from '../assets/Python.jpg';
// import angularImage from '../assets/Angular.jpg';

// import mongodbImage from '../assets/MongoDB.jpg';


// const Skills = () => {
//   const [hoveredSkill, setHoveredSkill] = useState(null);

//   const skills = [
//     { name: 'C', level: 'Expert', description: 'Proficient in C programming for system-level and application development.', image: cImage },
//     { name: 'Java', level: 'Expert', description: 'Experienced in Java with a focus on object-oriented programming and enterprise applications.', image: javaImage },
//     { name: 'Python', level: 'Intermediate', description: 'Skilled in Python for web development, data analysis, and automation.', image: pythonImage },
//     { name: 'Angular', level: 'Intermediate', description: 'Knowledgeable in Angular for building dynamic and responsive single-page applications.', image: angularImage },
//     { name: 'MongoDB', level: 'Intermediate', description: 'Proficient in MongoDB for NoSQL database management and data storage.', image: mongodbImage },
//   ];

//   return (
//     <section id="skills" className="skills">
//       <h2>Skills</h2>
//       <div className="skills-grid">
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             className="skill-item"
//             onMouseEnter={() => setHoveredSkill(skill)}
//             onMouseLeave={() => setHoveredSkill(null)}
//           >
//             <img src={skill.image} alt={skill.name} className="skill-image" />
//             <h3>{skill.name}</h3>
//             <p>{skill.level}</p>
//             {hoveredSkill === skill && (
//               <div className="skill-description">
//                 <p>{skill.description}</p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;

// import React from 'react';
// import '../styles/Skills.css';
// import cImage from '../assets/C.jpg';
// import javaImage from '../assets/Java.jpg';
// import pythonImage from '../assets/Python.jpg';
// import angularImage from '../assets/Angular.jpg';
// import mongodbImage from '../assets/MongoDB.jpg';
// import reactImage from '../assets/React.jpg'; // New
// import nodeImage from '../assets/Node.jpg';   // New
// import mysqlImage from '../assets/MySQL.jpg'; // New
// import htmlImage from '../assets/HTML.jpg';   // New
// import cssImage from '../assets/CSS.jpg';     // New

// const skills = [
//   { name: 'C', description: 'Proficient in C programming for system-level development.', image: cImage },
//   { name: 'Java', description: 'Experienced in object-oriented programming and enterprise applications.', image: javaImage },
//   { name: 'Python', description: 'Skilled in Python for web development, data analysis, and automation.', image: pythonImage },
//   { name: 'Angular', description: 'Building dynamic and responsive single-page applications.', image: angularImage },
//   { name: 'MongoDB', description: 'Proficient in NoSQL database management and data storage.', image: mongodbImage },
//   { name: 'React', description: 'Developing modern user interfaces with React.js.', image: reactImage },
//   { name: 'Node.js', description: 'Server-side JavaScript programming with Node.js and Express.', image: nodeImage },
//   { name: 'MySQL', description: 'Working with relational databases and SQL queries for data management.', image: mysqlImage },
//   { name: 'HTML', description: 'Building structured web pages with HTML5 for front-end development.', image: htmlImage },
//   { name: 'CSS', description: 'Styling and designing responsive web pages using CSS3.', image: cssImage },
// ];

// const Skills = () => {
//   return (
//     <section id="skills" className="skills">
//       <h2>Skills</h2>
//       <div className="skills-grid">
//         {skills.map((skill, index) => (
//           <div key={index} className="flip-card">
//             <div className="flip-card-inner">
//               <div className="flip-card-front">
//                 <img src={skill.image} alt={skill.name} className="skill-image" />
//                 <h3>{skill.name}</h3>
//               </div>
//               <div className="flip-card-back">
//                 <p>{skill.description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React from 'react';
import '../styles/Skills.css';
import cImage from '../assets/C.jpg';
import javaImage from '../assets/Java.jpg';
import pythonImage from '../assets/Python.jpg';
import angularImage from '../assets/Angular.jpg';
import mongodbImage from '../assets/MongoDB.jpg';
import reactImage from '../assets/React.jpg';
import nodeImage from '../assets/Node.jpg';
import mysqlImage from '../assets/MySQL.jpg';
import htmlImage from '../assets/HTML.jpg';
import cssImage from '../assets/CSS.jpg';

const skills = [
  { name: 'C', description: 'Proficient in C programming for system-level development.', image: cImage },
  { name: 'Java', description: 'Experienced in object-oriented programming and enterprise applications.', image: javaImage },
  { name: 'Python', description: 'Skilled in Python for web development, data analysis, and automation.', image: pythonImage },
  { name: 'Angular', description: 'Building dynamic and responsive single-page applications.', image: angularImage },
  { name: 'MongoDB', description: 'Proficient in NoSQL database management and data storage.', image: mongodbImage },
  { name: 'React', description: 'Developing modern user interfaces with React.js.', image: reactImage },
  { name: 'Node.js', description: 'Server-side JavaScript programming with Node.js and Express.', image: nodeImage },
  { name: 'MySQL', description: 'Working with relational databases and SQL queries for data management.', image: mysqlImage },
  { name: 'HTML', description: 'Building structured web pages with HTML5 for front-end development.', image: htmlImage },
  { name: 'CSS', description: 'Styling and designing responsive web pages using CSS3.', image: cssImage },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={skill.image} alt={skill.name} className="skill-image" />
                <h3>{skill.name}</h3>
              </div>
              <div className="flip-card-back">
                <p>{skill.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
