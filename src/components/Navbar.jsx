import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const cx = (...classes) => classes.filter(Boolean).join(' ');

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        if (location.pathname !== '/') {
            // If not on homepage, navigate to homepage first then scroll
            window.location.href = `/#${sectionId}`;
        } else {
            // If on homepage, just scroll to section
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsOpen(false);
    };

    const navLinks = [
        { name: 'About', action: () => scrollToSection('about') },
        { name: 'Projects', to: '/projects' },
        { name: 'Experience', to: '/experience' },
        { name: 'Contact', action: () => scrollToSection('contact') },
    ];
    
    return (
        <header className={cx(
            "fixed top-0 left-0 w-full z-50 transition-all duration-300",
            scrolled ? "bg-navy/80 backdrop-blur-sm shadow-lg" : "bg-transparent"
        )}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-green text-2xl font-mono font-bold transition-transform duration-300 transform hover:scale-110">
                    MS
                </Link>
                
                <div className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link, i) => (
                        link.to ? (
                            <Link 
                                key={link.name} 
                                to={link.to} 
                                className={cx(
                                    "text-lightest-slate hover:text-green transition-colors duration-300 font-mono",
                                    location.pathname === link.to && "text-green"
                                )}
                            >
                                <span className="text-green mr-1">0{i + 1}.</span>{link.name}
                            </Link>
                        ) : (
                            <button 
                                key={link.name}
                                onClick={link.action}
                                className="text-lightest-slate hover:text-green transition-colors duration-300 font-mono"
                            >
                                <span className="text-green mr-1">0{i + 1}.</span>{link.name}
                            </button>
                        )
                    ))}
                    <a href="https://drive.google.com/file/d/1JygxvJYBMut4qCFwBNjsMDFcfUS9SMRP/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="border border-green rounded-md px-4 py-2 text-green font-mono hover:bg-green/10 transition-all duration-300">
                        Resume
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-green focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden bg-light-navy shadow-lg"
                    >
                        <div className="flex flex-col items-center px-4 pt-2 pb-4 space-y-4">
                            {navLinks.map((link, i) => (
                                link.to ? (
                                    <Link 
                                        key={link.name} 
                                        to={link.to} 
                                        onClick={() => setIsOpen(false)}
                                        className="text-lightest-slate hover:text-green transition-colors duration-300 font-mono text-lg"
                                    >
                                        <span className="text-green mr-1">0{i + 1}.</span>{link.name}
                                    </Link>
                                ) : (
                                    <button 
                                        key={link.name}
                                        onClick={link.action}
                                        className="text-lightest-slate hover:text-green transition-colors duration-300 font-mono text-lg"
                                    >
                                        <span className="text-green mr-1">0{i + 1}.</span>{link.name}
                                    </button>
                                )
                            ))}
                            <a href="https://drive.google.com/file/d/1JygxvJYBMut4qCFwBNjsMDFcfUS9SMRP/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="border border-green rounded-md mt-4 px-6 py-3 text-green font-mono hover:bg-green/10 transition-all duration-300 w-full text-center">
                                Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
