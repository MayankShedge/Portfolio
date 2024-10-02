// src/components/Skills.js
import React from 'react';

// Import icons (make sure to have these files in your project)
import cIcon from '../assets/icons/c.png';
import cppIcon from '../assets/icons/cpp.png';
import javaIcon from '../assets/icons/java.png';
import jsIcon from '../assets/icons/javascript.png';
import html5Icon from '../assets/icons/html5.png';
import css3Icon from '../assets/icons/css.png';
import reactIcon from '../assets/icons/react.png';
import nodeIcon from '../assets/icons/nodejs.png';
import expressIcon from '../assets/icons/expressjs.png';
import tailwindIcon from '../assets/icons/tailwind.png';
import gitIcon from '../assets/icons/git.png';
import githubIcon from '../assets/icons/github.png';
import postmanIcon from '../assets/icons/postman.png';
import sqlIcon from '../assets/icons/sql.png';
import mongodbIcon from '../assets/icons/mongodb.png';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          <div className="flex flex-col items-center">
            <img src={cIcon} alt="C" className="h-16" />
            <span>C</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={cppIcon} alt="C++" className="h-16" />
            <span>C++</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={javaIcon} alt="Java" className="h-16" />
            <span>Java</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={jsIcon} alt="JavaScript" className="h-16" />
            <span>JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={html5Icon} alt="HTML5" className="h-16" />
            <span>HTML5</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={css3Icon} alt="CSS3" className="h-16" />
            <span>CSS3</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={reactIcon} alt="React" className="h-16" />
            <span>React</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={nodeIcon} alt="Node.js" className="h-16" />
            <span>Node.js</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={expressIcon} alt="Express.js" className="h-16" />
            <span>Express.js</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={tailwindIcon} alt="Tailwind" className="h-16" />
            <span>Tailwind</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={gitIcon} alt="Git" className="h-16" />
            <span>Git</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={githubIcon} alt="GitHub" className="h-16" />
            <span>GitHub</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={postmanIcon} alt="Postman" className="h-16" />
            <span>Postman</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={sqlIcon} alt="SQL" className="h-16" />
            <span>SQL</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={mongodbIcon} alt="MongoDB" className="h-16" />
            <span>MongoDB</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
