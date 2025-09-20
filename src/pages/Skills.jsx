import React from 'react';
import SkillCard from '../components/SkillCard';

function Skills() {
  const skills = [
    { skill: '⚛️ React.js', level: 'Advanced' },
    { skill: '🟢 Node.js', level: 'Intermediate' },
    { skill: '🗄️ MySQL', level: 'Intermediate' },
    { skill: '🌐 HTML/CSS/JS', level: 'Advanced' },
  ];

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

  const skillsContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "16px"
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Skills</h2>
      <div style={skillsContainer}>
        {skills.map((s, i) => (
          <SkillCard key={i} skill={s.skill} level={s.level} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
