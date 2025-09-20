import React from 'react';

function About() {
  const sectionStyle = {
    background: "linear-gradient(135deg, #1e293b, #0f172a)",
    color: "#f8fafc",
    padding: "40px",
    borderRadius: "16px",
    maxWidth: "600px",
    margin: "40px auto",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  };

  const headingStyle = {
    fontSize: "2rem",
    marginBottom: "16px",
    color: "#38bdf8"
  };

  const paragraphStyle = {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    color: "#e2e8f0"
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>About Me</h2>
      <p style={paragraphStyle}>
        This section contains information about you. You can describe your skills,
        interests, background, and goals here.
      </p>
    </section>
  );
}

export default About;
