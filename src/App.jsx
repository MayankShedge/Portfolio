import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Import your existing components
import ParticleBackground from './components/ParticleBackgorund';
import Navbar from './components/Navbar';
import SideLinks from './components/SideLinks';
import Footer from './components/Footer';

// Import new page components
import HomePage from './pages/Home.jsx';
import ProjectsPage from './pages/ProjectPage.jsx';
import ExperiencePage from './pages/ExperiencePage.jsx';

// Import your existing Tailwind styles
import './index.css';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    }
  }, []);

  return (
    <Router>
      <div className="App bg-navy font-sans text-white min-h-screen">
        <ParticleBackground />
        <Navbar />
        <SideLinks />
        
        <main className="container mx-auto px-6 md:px-24 lg:px-36">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AnimatePresence>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
