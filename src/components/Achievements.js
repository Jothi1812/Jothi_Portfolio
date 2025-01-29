// import React, { useState } from 'react';
// import '../styles/Achievements.css';  // Make sure you import the CSS file

// const Achievements = () => {
//   const [currentPage, setCurrentPage] = useState(0);

//   const achievements = [
//     { title: '1st Prize - Sign-In Project Presentation', event: 'Sign-In (KEC 2024)', year: '2024', icon: '🥇' },
//     { title: '2nd Prize - Ideathon Project Presentation', event: 'Ideathon (2024)', year: '2024', icon: '🥈' },
//     { title: 'Academic Excellence Award (KEC 2024)', event: 'KVITT', year: '2024', icon: '🏆' },
//     { title: '2nd Prize - Ideathon Project Presentation', event: 'Ideathon (2023)', year: '2023', icon: '🥈' }
//   ];

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => (prevPage + 1) % achievements.length);
//   };

//   return (
//     <section id="achievements" className="achievements">
//       <h2>Achievements</h2>
//       <div className="book-page-container">
//         <div className="book-page">
//           <div className="achievement-card-container">
//             <div
//               className={`achievement-card ${currentPage === 0 ? 'active' : ''}`}
//               style={{ animationDelay: '0s' }}
//             >
//               <div className="achievement-icon">{achievements[currentPage].icon}</div>
//               <div className="achievement-content">
//                 <h3>{achievements[currentPage].title}</h3>
//                 <p><strong>Event:</strong> {achievements[currentPage].event}</p>
//                 <p><strong>Year:</strong> {achievements[currentPage].year}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <button onClick={handleNextPage} className="next-button">Next</button>
//     </section>
//   );
// };

// export default Achievements;

// import React, { useState } from 'react';
// import '../styles/Achievements.css';  // Make sure you import the CSS file

// const Achievements = () => {
//   const [currentPage, setCurrentPage] = useState(0);

//   const achievements = [
//     { 
//       title: '1st Prize - Sign-In Project Presentation', 
//       event: 'Sign-In (KEC 2024)', 
//       year: '2024', 
//       icon: '🥇',
//       certificate: '../assets/Certificate1.jpg'
//     },
//     { 
//       title: '2nd Prize - Ideathon Project Presentation', 
//       event: 'Ideathon (2024)', 
//       year: '2024', 
//       icon: '🥈',
//       certificate: 'certificate2.jpg'
//     },
//     { 
//       title: 'Academic Excellence Award (KEC 2024)', 
//       event: 'KVITT', 
//       year: '2024', 
//       icon: '🏆',
//       certificate: 'certificate3.jpg'
//     },
//     { 
//       title: '2nd Prize - Ideathon Project Presentation', 
//       event: 'Ideathon (2023)', 
//       year: '2023', 
//       icon: '🥈',
//       certificate: 'certificate4.jpg'
//     }
//   ];

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => (prevPage + 1) % achievements.length);
//   };

//   return (
//     <section id="achievements" className="achievements">
//       <h2>Achievements</h2>
//       <div className="achievements-container">
//         {/* Loop through each achievement */}
//         <div className="achievement-card">
//           <div className="achievement-info">
//             <div className="achievement-icon">{achievements[currentPage].icon}</div>
//             <div className="achievement-content">
//               <h3>{achievements[currentPage].title}</h3>
//               <p><strong>Event:</strong> {achievements[currentPage].event}</p>
//               <p><strong>Year:</strong> {achievements[currentPage].year}</p>
//             </div>
//           </div>
          
//           {/* Certificate on the side */}
//           <div className="certificate-image-container">
//             <img 
//               src={`path_to_certificates/${achievements[currentPage].certificate}`} // Path to certificate image
//               alt={achievements[currentPage].title}
//               className="certificate-image"
//             />
//           </div>
//         </div>
//       </div>

//       <button onClick={handleNextPage} className="next-button">Next</button>
//     </section>
//   );
// };

// export default Achievements;
// import React, { useState } from 'react';
// import '../styles/Achievements.css';  // Ensure you import the CSS file

// const Achievements = () => {
//   const [currentPage, setCurrentPage] = useState(0);

//   const achievements = [
//     { 
//       title: '1st Prize - Sign-In Project Presentation', 
//       event: 'Sign-In (KEC 2024)', 
//       year: '2024', 
//       icon: '🥇',
//       certificate: 'certificate1.jpg' // Image file name without path
//     },
//     { 
//       title: '2nd Prize - Ideathon Project Presentation', 
//       event: 'Ideathon (2024)', 
//       year: '2024', 
//       icon: '🥈',
//       certificate: 'certificate2.jpg' // Image file name without path
//     },
//     { 
//       title: 'Academic Excellence Award (KEC 2024)', 
//       event: 'KVITT', 
//       year: '2024', 
//       icon: '🏆',
//       certificate: 'certificate3.jpg' // Image file name without path
//     },
//     { 
//       title: '2nd Prize - Ideathon Project Presentation', 
//       event: 'Ideathon (2023)', 
//       year: '2023', 
//       icon: '🥈',
//       certificate: 'certificate4.jpg' // Image file name without path
//     }
//   ];

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => (prevPage + 1) % achievements.length);
//   };

//   return (
//     <section id="achievements" className="achievements">
//       <h2>Achievements</h2>
//       <div className="achievements-container">
//         <div className="achievement-card">
//           <div className="achievement-info">
//             <div className="achievement-icon">{achievements[currentPage].icon}</div>
//             <div className="achievement-content">
//               <h3>{achievements[currentPage].title}</h3>
//               <p><strong>Event:</strong> {achievements[currentPage].event}</p>
//               <p><strong>Year:</strong> {achievements[currentPage].year}</p>
//             </div>
//           </div>
          
//           {/* Certificate on the side */}
//           <div className="certificate-image-container">
//             <img 
//               src={`/assets/${achievements[currentPage].certificate}`} // Corrected path
//               alt={achievements[currentPage].title}
//               className="certificate-image"
//             />
//           </div>
//         </div>
//       </div>

//       <button onClick={handleNextPage} className="next-button">Next</button>
//     </section>
//   );
// };

// export default Achievements;

import React, { useState } from 'react';
import '../styles/Achievements.css';  // Ensure you import the CSS file

// Import images directly from the src folder
import certificate1 from '../assets/certificate1.jpg';
import certificate2 from '../assets/certificate2.jpg';
import certificate3 from '../assets/certificate3.jpg';
// import certificate4 from '../assets/certificate4.jpg';

const Achievements = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const [selectedCertificate, setSelectedCertificate] = useState(''); // State for selected certificate

  const achievements = [
    { 
      title: '1st Prize - Sign-In Project Presentation', 
      event: 'Sign-In (KEC 2024)', 
      year: '2024', 
      icon: '🥇',
      certificate: certificate1 // Imported certificate image
    },
    { 
      title: '2nd Prize - Ideathon Project Presentation', 
      event: 'Ideathon (2024)', 
      year: '2024', 
      icon: '🥈',
      certificate: certificate2 // Imported certificate image
    },
    { 
      title: 'Academic Excellence Award (KEC 2024)', 
      event: 'KVITT', 
      year: '2024', 
      icon: '🏆',
      certificate: certificate3 // Imported certificate image
    },
    { 
      title: '2nd Prize - Ideathon Project Presentation', 
      event: 'Ideathon (2023)', 
      year: '2023', 
      icon: '🥈',
      certificate: certificate2 // Imported certificate image
    }
  ];

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % achievements.length);
  };

  // Open modal with the selected certificate
  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate('');
  };

  return (
    <section id="achievements" className="achievements">
      <h2>Achievements</h2>
      <div className="achievements-container">
        <div className="achievement-card">
          <div className="achievement-info">
            <div className="achievement-icon">{achievements[currentPage].icon}</div>
            <div className="achievement-content">
              <h3>{achievements[currentPage].title}</h3>
              <p><strong>Event:</strong> {achievements[currentPage].event}</p>
              <p><strong>Year:</strong> {achievements[currentPage].year}</p>
            </div>
          </div>
          
          {/* Certificate image with click handler */}
          <div className="certificate-image-container" onClick={() => openModal(achievements[currentPage].certificate)}>
            <img 
              src={achievements[currentPage].certificate} 
              alt={achievements[currentPage].title}
              className="certificate-image"
            />
          </div>
        </div>
      </div>

      <button onClick={handleNextPage} className="next-button">Next</button>

      {/* Modal for showing larger certificate */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img 
              src={selectedCertificate} 
              alt="Certificate" 
              className="modal-image"
            />
            <button className="close-modal" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
