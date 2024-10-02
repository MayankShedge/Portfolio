// src/components/AboutMe.js
// src/components/AboutMe.js
import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="bg-gray-800 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Hi, I'm Mayank</h2>
        <p className="mt-4 text-xl">
          I'm a <span className="text-blue-400 font-semibold">MERN stack developer</span> passionate about building modern web applications that provide great user experiences. With a solid foundation in <span className="text-purple-400 font-semibold">JavaScript</span> and expertise in frameworks like <span className="text-blue-500 font-semibold">React</span> and <span className="text-green-400 font-semibold">Node.js</span>, I enjoy creating dynamic and responsive applications.
        </p>
        <p className="mt-4 text-xl">
          My journey in web development has equipped me with a diverse skill set, including <span className="text-red-400 font-semibold">HTML5</span>, <span className="text-red-400 font-semibold">CSS3</span>, and <span className="text-yellow-400 font-semibold">MongoDB</span>. I thrive in collaborative environments where I can learn from others while contributing to impactful projects.
        </p>
        <p className="mt-4 text-xl">
          In my spare time, I love exploring new technologies  and  I'm excited about the future of web development and look forward to creating solutions that enhance productivity and creativity.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;

