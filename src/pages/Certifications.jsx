import React from 'react';

function Certifications() {
  const certs = [
    "🎓 Google Cloud Fundamentals",
    "☁️ AWS Certified Cloud Practitioner",
    "💻 Meta Front-End Developer Certificate",
  ];

  const sectionStyle = {
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    color: "#f8fafc",
    padding: "40px 20px",
    borderRadius: "16px",
    maxWidth: "700px",
    margin: "40px auto",
    textAlign: "center",
    boxShadow: "0 8px 24px rgba(0,0,0,0.4)"
  };

  const headingStyle = {
    fontSize: "2rem",
    color: "#38bdf8",
    marginBottom: "20px"
  };

  const listStyle = { listStyle: "none", padding: 0 };

  const listItemStyle = {
    background: "#0f172a",
    padding: "12px 16px",
    margin: "10px auto",
    borderRadius: "10px",
    fontSize: "1.1rem",
    maxWidth: "500px"
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Certifications</h2>
      <ul style={listStyle}>
        {certs.map((cert, i) => (
          <li key={i} style={listItemStyle}>{cert}</li>
        ))}
      </ul>
    </section>
  );
}

export default Certifications;
