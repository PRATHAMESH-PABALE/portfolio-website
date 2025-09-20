import React from 'react';

function ExperienceCard({ company, role, duration, description }) {
  return (
    <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd' }}>
      <h3>{role} at {company}</h3>
      <p><strong>Duration:</strong> {duration}</p>
      <p>{description}</p>
    </div>
  );
}

export default ExperienceCard;
