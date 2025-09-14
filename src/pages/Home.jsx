import React from 'react';
import { motion } from 'framer-motion';

// Helper function for class names
const cx = (...classes) => classes.filter(Boolean).join(' ');

// Section Header Component
const SectionHeader = ({ number, title }) => (
    <div className="flex items-center gap-4 mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-lightest-slate whitespace-nowrap">
            <span className="text-green font-mono mr-2">0{number}.</span>
            {title}
        </h2>
        <div className="w-full h-px bg-lightest-navy"></div>
    </div>
);

// Hero Section
const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <p className="text-green font-mono mb-4 text-md md:text-lg">Hi, my name is</p>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-lightest-slate">Mayank Shedge.</h1>
                <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate mt-2">I build intelligent web solutions.</h2>
                <p className="text-slate mt-6 max-w-xl text-lg">
                    I'm a <span className="text-green">Software Developer at Deloitte</span> specializing in full-stack development, 
                    AI/ML integration, and Microsoft Power Platform solutions. Currently focused on building 
                    enterprise-grade applications with modern web technologies.
                </p>
                <a href="/projects" className="inline-block mt-8 border border-green rounded-md px-8 py-4 text-green font-mono hover:bg-green/10 transition-all duration-300">
                    Check out my work!
                </a>
            </motion.div>
        </section>
    );
};

// About Section
const About = () => {
    const skills = [
        'JavaScript (ES6+)', 'TypeScript', 'Python', 'React', 'Node.js & Express', 
        'MongoDB', 'TensorFlow', 'PowerApps', 'SharePoint (SPFx)', 'C# & ASP.NET'
    ];
    
    return (
        <section id="about" className="py-24">
            <SectionHeader number={1} title="About Me" />
            <div className="grid md:grid-cols-5 gap-10">
                <div className="md:col-span-3 text-slate text-lg space-y-4">
                    <p>
                        Hello! I'm Mayank, a software developer based in Navi Mumbai with a passion for creating intelligent web solutions. 
                        My journey in technology has led me to work with cutting-edge technologies spanning full-stack development, 
                        AI/ML integration, and enterprise platform solutions.
                    </p>
                    <p>
                       Currently, I'm working as a <span className="text-green">Software Developer at Deloitte</span>, where I contribute to 
                       enterprise-level applications using the MERN stack alongside Microsoft Power Platform and SharePoint. 
                       This role has given me unique insights into integrating modern web technologies within large-scale corporate environments.
                    </p>
                    <p>
                        My experience spans from building AI-powered applications with <span className="text-green">90% accuracy</span> in waste 
                        classification to developing production-grade timesheet management systems used within Deloitte. 
                        I enjoy solving complex problems and turning innovative ideas into robust, scalable solutions.
                    </p>
                    <p>
                        Here are some technologies I've been working with:
                    </p>
                    <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
                        {skills.map(skill => (
                            <li key={skill} className="flex items-center">
                                <span className="text-green mr-2">▹</span>{skill}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="md:col-span-2 flex justify-center items-start">
                    <div className="relative w-64 h-64 group">
                        <div className="absolute inset-0 bg-green rounded-lg transform rotate-6 group-hover:rotate-3 transition-transform duration-300"></div>
                        <img 
                            className="absolute inset-0 w-full h-full object-cover rounded-lg filter grayscale group-hover:grayscale-0 transition-all duration-300"
                            src="https://placehold.co/300x300/112240/64ffda?text=MS" 
                            alt="Mayank Shedge"
                         />
                    </div>
                </div>
            </div>
        </section>
    );
};

// Enhanced Skills Section
const Skills = () => {
    const skillCategories = {
        'Programming': ['JavaScript', 'TypeScript', 'Python', 'C', 'C++', 'Java', 'C#'],
        'Frontend': ['React.js', 'HTML5', 'CSS3', 'Tailwind', 'GraphQL'],
        'Backend': ['Node.js', 'Express.js', 'ASP.NET', 'Mongoose'],
        'Database': ['MongoDB', 'SQL', 'PL-SQL'],
        'AI/ML': ['TensorFlow', 'Keras', 'OpenCV', 'scikit-learn'],
        'Microsoft': ['PowerApps', 'Power Automate', 'SharePoint', 'SPFx'],
        'Tools': ['Git', 'Postman', 'MongoDB Compass', 'Excel']
    };

    return (
        <section id="skills" className="py-24">
            <SectionHeader number={2} title="Skills & Technologies" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(skillCategories).map(([category, skills]) => (
                    <motion.div 
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-light-navy p-6 rounded-lg"
                    >
                        <h3 className="text-lg font-bold text-green mb-4 font-mono">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map(skill => (
                                <span 
                                    key={skill} 
                                    className="bg-navy px-3 py-1 rounded-md text-sm text-slate border border-lightest-navy hover:border-green transition-colors duration-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

// Coding Platforms Section
const CodingPlatforms = () => {
    const platforms = [
        {
            name: 'LeetCode',
            url: 'https://leetcode.com/u/MaYaNk___1304/',
            description: 'Algorithm and data structure practice'
        },
        {
            name: 'Coding Ninjas',
            url: 'https://www.naukri.com/code360/profile/MayankShedge',
            description: 'Comprehensive coding practice'
        }
    ];

    return (
        <section id="coding-platforms" className="py-24">
            <SectionHeader number={3} title="Coding Platforms" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {platforms.map(platform => (
                    <motion.a
                        key={platform.name}
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -5 }}
                        className="block bg-light-navy p-6 rounded-lg border border-lightest-navy hover:border-green transition-all duration-300"
                    >
                        <h3 className="text-xl font-bold text-lightest-slate mb-2">{platform.name}</h3>
                        <p className="text-slate">{platform.description}</p>
                        <div className="mt-4 text-green font-mono text-sm">
                            View Profile →
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

// Contact Section
const Contact = () => {
    return (
        <section id="contact" className="py-24 text-center">
            <h2 className="font-mono text-green mb-2">04. What's Next?</h2>
            <h3 className="text-5xl font-bold text-lightest-slate mb-4">Get In Touch</h3>
            <p className="text-slate max-w-lg mx-auto mb-8">
                I'm currently thriving at Deloitte and always interested in exciting opportunities and collaborations. 
                Whether you have a question, want to discuss technology, or just want to say hi, I'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a 
                    href="mailto:mayankshedge07@gmail.com" 
                    className="inline-block border border-green rounded-md px-8 py-4 text-green font-mono hover:bg-green/10 transition-all duration-300 text-lg"
                >
                    Say Hello
                </a>
                <div className="text-slate font-mono">
                    <p>📧 mayankshedge07@gmail.com</p>
                    <p>📱 +91-8355904926</p>
                </div>
            </div>
        </section>
    );
}

// Main HomePage Component
const HomePage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero />
            <About />
            <Skills />
            <CodingPlatforms />
            <Contact />
        </motion.div>
    );
};

export default HomePage;
