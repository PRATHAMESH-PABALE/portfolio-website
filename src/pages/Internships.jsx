import React from 'react';
import ExperienceCard from '../components/ExperienceCard';

function Internships() {
  const sectionStyle = {
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    color: "#f8fafc",
    padding: "50px 20px",
    borderRadius: "16px",
    maxWidth: "900px",
    margin: "40px auto",
    boxShadow: "0 8px 24px rgba(0,0,0,0.4)"
  };

  const headingStyle = {
    fontSize: "2rem",
    marginBottom: "20px",
    textAlign: "center",
    color: "#38bdf8"
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Internship Experience</h2>
      <ExperienceCard
        company="TechSoft Solutions"
        role="Web Development Intern"
        duration="June 2024 – August 2024"
        description="Worked on building frontend components using React and integrating APIs."
      />
      <ExperienceCard
        company="CodeLab Inc."
        role="Backend Intern"
        duration="Jan 2024 – March 2024"
        description="Developed RESTful APIs using Node.js and MySQL for the internal tools team."
      />
    </section>
  );
}

export default Internships;
