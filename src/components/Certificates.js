// src/components/Certificates.js
import React from 'react';
import '../styles/Certificates.css';

const Certificates = () => {
  const certificates = [
    { title: 'Database Management System Part 1', issuer: 'Infosys Springboard', date: 'May 24, 2024' },
    { title: 'Deep Learning Certification', issuer: 'NVIDIA', date: 'April 25, 2024' }
  ];

  return (
    <section id="certificates" className="certificates">
      <h2>Certificates</h2>
      <div className="certificate-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <h3>{cert.title}</h3>
            <p><strong>Issuer:</strong> {cert.issuer}</p>
            <p><strong>Date:</strong> {cert.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;