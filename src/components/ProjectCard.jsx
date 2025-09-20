import React from 'react';
import PropTypes from 'prop-types';

function ProjectCard({ title, description }) {
  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', marginBottom: '10px' }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// ✅ Add prop validation here
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectCard;
