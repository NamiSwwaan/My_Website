import React from 'react';

function Internships() {
  const internships = [
    {
      company: "SAP code Unnati",
      year: "2024",
      position: "AI-ML Internship",
      institution: "GTU"
    },
    {
      company: "Infolebz IT Services Pvt. Ltd.",
      year: "2024",
      position: "ML Internship",
      institution: "GTU"
    }
  ];

  return (
    <section id="internships" className="section">
      <div className="container">
        <h2>Internships</h2>
        <div className="internships-list">
          {internships.map((internship, index) => (
            <div key={index} className="internship-card">
              <h3>{internship.company}</h3>
              <p>{internship.position}</p>
              <p>{internship.year} - {internship.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Internships;
