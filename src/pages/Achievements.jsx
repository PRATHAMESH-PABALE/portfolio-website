import React from 'react';

function Achievements() {
  const achievements = [
    "🏆 Winner – Smart India Hackathon 2024",
    "🥇 1st Place – College Level Coding Competition",
    "🌐 Top 5 – National Web Dev Challenge",
  ];

  const sectionStyle = {
    background: "linear-gradient(135deg, #1e293b, #0f172a)",
    color: "#f8fafc",
    padding: "50px 20px",
    borderRadius: "16px",
    maxWidth: "700px",
    margin: "50px auto",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  };

  const headingStyle = {
    fontSize: "2rem",
    marginBottom: "20px",
    textAlign: "center",
    color: "#38bdf8"
  };

  const listStyle = {
    listStyleType: "none",
    padding: 0,
    margin: 0
  };

  const listItemStyle = {
    background: "#0f172a",
    margin: "10px 0",
    padding: "12px 20px",
    borderRadius: "12px",
    fontSize: "1.1rem",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    cursor: "default"
  };

  const hoverEffect = {
    transform: "scale(1.02)",
    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.5)"
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Achievements</h2>
      <ul style={listStyle}>
        {achievements.map((a, i) => (
          <li
            key={i}
            style={listItemStyle}
            onMouseEnter={(e) =>
              Object.assign(e.target.style, hoverEffect)
            }
            onMouseLeave={(e) =>
              Object.assign(e.target.style, listItemStyle)
            }
          >
            {a}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Achievements;
