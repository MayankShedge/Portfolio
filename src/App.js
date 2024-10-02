// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';
import CodingPlatforms from './components/CodingPlatforms';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
      <CodingPlatforms />
      <Resume />
    </div>
  );
}

export default App;

