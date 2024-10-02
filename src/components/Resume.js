// src/components/Resume.js
import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">Resume</h2>
        <a
          href="https://drive.google.com/file/d/1CXbpxeodfmIrhIf4khlAQP4A6f8M_RMW/view?usp=drive_link" // Remove the leading /
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Download My Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;

