import React from 'react';
import { motion } from 'framer-motion';

const IconGitHub = () => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github h-5 w-5">
        <title>GitHub</title>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);

const IconLinkedin = () => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin h-5 w-5">
        <title>LinkedIn</title>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const SideLinks = () => {
    return (
        <>
            {/* Left Socials */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="hidden md:flex flex-col items-center fixed bottom-0 left-10 z-10"
            >
                <div className="flex flex-col items-center space-y-4">
                    <a href="https://github.com/MayankShedge" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green transform hover:-translate-y-1 transition-all duration-300">
                        <IconGitHub />
                    </a>
                    <a href="https://www.linkedin.com/in/mayank-shedge-899381230" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green transform hover:-translate-y-1 transition-all duration-300">
                        <IconLinkedin />
                    </a>
                </div>
                <div className="w-px h-24 bg-slate mt-6"></div>
            </motion.div>

            {/* Right Email */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="hidden md:flex flex-col items-center fixed bottom-0 right-10 z-10"
            >
                <a href="mailto:mayankshedge07@gmail.com" className="font-mono text-sm text-slate tracking-widest [writing-mode:vertical-rl] hover:text-green transform hover:-translate-y-1 transition-all duration-300">
                    mayankshedge07@gmail.com
                </a>
                <div className="w-px h-24 bg-slate mt-6"></div>
            </motion.div>
        </>
    );
}

export default SideLinks;
