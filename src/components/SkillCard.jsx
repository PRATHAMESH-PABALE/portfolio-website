import React from 'react';

function SkillCard({ skill, level }) {
  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', margin: '10px' }}>
      <h4>{skill}</h4>
      <p>Proficiency: {level}</p>
    </div>
  );
}

export default SkillCard;
