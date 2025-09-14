import React, { useState } from 'react';
import { motion } from 'framer-motion';

const cx = (...classes) => classes.filter(Boolean).join(' ');

const SectionHeader = ({ number, title }) => (
    <div className="flex items-center gap-4 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-lightest-slate whitespace-nowrap">
            <span className="text-green font-mono mr-2">0{number}.</span>
            {title}
        </h2>
        <div className="w-full h-px bg-lightest-navy"></div>
    </div>
);

const ExperiencePage = () => {
    const experiences = [
        {
            company: 'Deloitte',
            role: 'Software Developer (Executive)',
            date: 'March 2025 - Present',
            type: 'Full-time',
            tasks: [
                'Developed form-driven CRP platform using MERN stack & Power Platform, integrating data from Jupiter and P2W into Dataverse via SAP connectors',
                'Implemented JWT authentication and role-based access control to enhance application security and user management',
                'Contributed to SharePoint Online solutions, including site creation, workflow development, and building custom web parts with SPFx and React',
                'Optimized MongoDB queries and database performance, resulting in significant reliability and speed improvements',
                'Built production-ready Timesheet Management application using Power Apps + Power Automate + SharePoint, currently used by Deloitte employees'
            ],
        },
        {
            company: 'Internship Studio',
            role: 'Web Development Intern',
            date: 'December 2023 - January 2024',
            type: 'Internship',
            tasks: [
                'Completed intensive 5-week structured online training in full-stack web development with hands-on projects',
                'Designed and developed complete e-commerce "Shop-Cart" website from scratch using the MERN Stack',
                'Built RESTful APIs with proper error handling and managed complex database schemas with MongoDB',
                'Developed responsive user interfaces with React, ensuring cross-browser compatibility and mobile responsiveness'
            ],
        },
    ];

    const education = [
        {
            institution: 'Terna Engineering College, Nerul',
            degree: 'Bachelor of Engineering in Computer Engineering',
            duration: 'December 2021 - May 2025',
            grade: 'CGPA: 8.9',
            details: 'Specialized in Computer Engineering with focus on software development, data structures, algorithms, and machine learning'
        },
        {
            institution: 'Lakshya Jr. College, Nerul',
            degree: 'Higher Secondary Education (HSC)',
            duration: 'June 2019 - June 2021',
            grade: '95%',
            details: 'Science stream with Mathematics, Physics, Chemistry, and Computer Science'
        },
        {
            institution: 'Fr. Agnel Multipurpose School, Vashi',
            degree: 'Secondary School Certificate (SSC)',
            duration: 'April 2006 - June 2019',
            grade: '92.20%',
            details: 'Strong foundation in mathematics and science subjects'
        }
    ];

    const certifications = [
        { name: 'Web Development', provider: 'Udemy', category: 'Development' },
        { name: 'Problem Solving', provider: 'HackerRank', category: 'Programming' },
        { name: 'Databases', provider: 'HackerRank', category: 'Database' },
        { name: 'Growth Strategy', provider: 'Younity', category: 'Business' },
        { name: 'C# Programming', provider: 'Udemy', category: 'Programming' },
        { name: 'Excel for Data Analytics', provider: 'Udemy', category: 'Analytics' }
    ];

    const [activeTab, setActiveTab] = useState(0);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-24 pb-16"
        >
            {/* Professional Experience */}
            <section className="mb-20">
                <SectionHeader number={1} title="Professional Experience" />
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible">
                        {experiences.map((exp, index) => (
                            <button
                                key={exp.company}
                                onClick={() => setActiveTab(index)}
                                className={cx(
                                    'px-4 py-2 text-left font-mono text-sm whitespace-nowrap border-b-2 md:border-b-0 md:border-l-2 transition-all duration-300',
                                    activeTab === index 
                                        ? 'text-green border-green bg-light-navy' 
                                        : 'text-slate border-lightest-navy hover:bg-light-navy hover:text-green'
                                )}
                            >
                                {exp.company}
                            </button>
                        ))}
                    </div>
                    <motion.div 
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-grow"
                    >
                        <h3 className="text-xl font-bold text-lightest-slate">
                            {experiences[activeTab].role} <span className="text-green">@ {experiences[activeTab].company}</span>
                        </h3>
                        <div className="flex items-center gap-4 mt-1 mb-4">
                            <p className="font-mono text-sm text-slate">{experiences[activeTab].date}</p>
                            <span className="bg-green/20 text-green text-xs px-2 py-1 rounded-full font-mono">
                                {experiences[activeTab].type}
                            </span>
                        </div>
                        <ul className="space-y-3 text-slate">
                            {experiences[activeTab].tasks.map((task, index) => (
                                <motion.li 
                                    key={index}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className="flex"
                                >
                                    <span className="text-green mr-3 mt-1">▹</span>
                                    <span>{task}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Education */}
            <section className="mb-20">
                <SectionHeader number={2} title="Education" />
                <div className="space-y-6">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.institution}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-light-navy p-6 rounded-lg border border-lightest-navy hover:border-green/50 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                <h3 className="text-lg font-bold text-lightest-slate">{edu.degree}</h3>
                                <span className="text-green font-mono text-sm">{edu.grade}</span>
                            </div>
                            <p className="text-green font-mono text-sm mb-1">{edu.institution}</p>
                            <p className="text-slate text-sm mb-3">{edu.duration}</p>
                            <p className="text-slate text-sm">{edu.details}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Certifications */}
            <section>
                <SectionHeader number={3} title="Certifications" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="bg-light-navy p-4 rounded-lg border border-lightest-navy hover:border-green/50 transition-all duration-300"
                        >
                            <h4 className="text-lightest-slate font-semibold mb-1">{cert.name}</h4>
                            <p className="text-green font-mono text-sm mb-2">{cert.provider}</p>
                            <span className="inline-block bg-navy px-2 py-1 rounded text-xs text-slate">
                                {cert.category}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center mt-20"
            >
                <h3 className="text-2xl font-bold text-lightest-slate mb-4">Let's Connect</h3>
                <p className="text-slate mb-8">
                    Interested in my experience or want to discuss potential opportunities?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                        href="https://drive.google.com/file/d/1JygxvJYBMut4qCFwBNjsMDFcfUS9SMRP/view?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block border border-green rounded-md px-8 py-4 text-green font-mono hover:bg-green/10 transition-all duration-300"
                    >
                        View Resume
                    </a>
                    <a 
                        href="mailto:mayankshedge07@gmail.com"
                        className="inline-block bg-green text-navy rounded-md px-8 py-4 font-mono hover:bg-green/80 transition-all duration-300"
                    >
                        Contact Me
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ExperiencePage;
