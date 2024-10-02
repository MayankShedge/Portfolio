// src/components/Projects.js
import React from 'react';
import ProjectCard from './ProjectCard'; // Import the ProjectCard component

const projects = [
  {
    title: 'Project 1',
    description: 'Description of Project 1.',
    imageUrl: 'https://via.placeholder.com/400x300', // Replace with your project image URLs
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2.',
    imageUrl: 'https://via.placeholder.com/400x300',
  },
  {
    title: 'Project 3',
    description: 'Description of Project 3.',
    imageUrl: 'https://via.placeholder.com/400x300',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-700 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

