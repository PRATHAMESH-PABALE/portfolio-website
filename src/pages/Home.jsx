import React from 'react';

function Home() {
  const sectionStyle = {
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    color: "#f8fafc",
    padding: "60px 20px",
    borderRadius: "16px",
    maxWidth: "800px",
    margin: "50px auto",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
    textAlign: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  };

  const headingStyle = {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#22d3ee"
  };

  const paragraphStyle = {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    color: "#e2e8f0"
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Welcome to My Portfolio</h2>
      <p style={paragraphStyle}>
        This is the homepage section with some intro text. 
        Explore my projects, skills, and experiences to know more about me.
      </p>
    </section>
  );
}

export default Home;
