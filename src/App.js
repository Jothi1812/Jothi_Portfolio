// // src/App.js
// import React from 'react';
// import Header from './components/Header';
// import About from './components/About';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Education from './components/Education';
// import Experience from './components/Experience';
// import Contact from './components/Contact';
// import Main from './components/Main';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <About />
//       <Skills />
//       <Projects />
//       <Main/>
//       <Education />
//       <Experience />
//       <Contact />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Education from './components/Education';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;
