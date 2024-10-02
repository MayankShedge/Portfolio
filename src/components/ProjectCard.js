import React from 'react';

const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-lg hover:scale-105 transform transition">
      <img src={imageUrl} alt={title} className="rounded-lg mb-4" />
      <h3 className="text-2xl">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
