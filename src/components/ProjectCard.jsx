import React from 'react';

function ProjectCard({ title, description }) {
  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', marginBottom: '10px' }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;
