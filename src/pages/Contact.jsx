import React from 'react';
import ContactForm from '../components/ContactForm';

function Contact() {
  const sectionStyle = {
    background: "linear-gradient(135deg, #1e293b, #0f172a)",
    color: "#f8fafc",
    padding: "50px 20px",
    borderRadius: "16px",
    maxWidth: "700px",
    margin: "40px auto",
    textAlign: "center",
    boxShadow: "0 8px 24px rgba(0,0,0,0.4)"
  };

  const headingStyle = {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#38bdf8"
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Contact Me</h2>
      <ContactForm />
    </section>
  );
}

export default Contact;
