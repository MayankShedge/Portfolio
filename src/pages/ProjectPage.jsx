import React from 'react';
import { motion } from 'framer-motion';

const IconGitHub = () => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github h-5 w-5">
        <title>GitHub</title>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);

const IconExternalLink = () => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link h-5 w-5">
        <title>External Link</title>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
);

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

const ProjectsPage = () => {
    const projects = [
        {
            title: 'WasteWise - AI Waste Segregation',
            description: 'A full-stack intelligent waste segregation app featuring an AI-powered scanner built with TensorFlow.js. Achieved 90% waste classification accuracy with gamification features including points, badges, leaderboards, and real-time analytics dashboard.',
            tech: ['React', 'Node.js', 'MongoDB', 'TensorFlow.js', 'AI/ML'],
            github: 'https://github.com/MayankShedge/WasteWise-frontend',
            live: 'https://waste-wise-delta.vercel.app',
            image: '/WasteWise.png', 
            features: ['90% AI classification accuracy', 'Real-time waste scanning', 'Gamification system', 'Admin dashboard', 'Feedback-driven learning', 'Multi-category waste detection'],
            impact: 'Improved waste sorting accuracy for users by up to 90%'
        },
        {
            title: 'Sci-Tech Crawl - Intelligent Web Crawler',
            description: 'A domain-specific web crawler and data delivery platform that returns the top 10 most contextually relevant results. Uses advanced NLP techniques including TF-IDF scoring and Reciprocal Rank Fusion (RRF) combining vector space and BM25 scores.',
            tech: ['Python', 'Flask', 'React', 'MongoDB', 'NLP', 'TF-IDF', 'BM25'],
            github: 'https://github.com/MayankShedge/Sci-Tech-Crawl-backend',
            live: '',
            image: 'SciTechCrawl.png', 
            features: ['Contextual relevance ranking', 'TF-IDF score calculation', 'RRF algorithm implementation', 'Web content summarization', 'Top 10 query results', 'Domain-specific crawling'],
            impact: 'Enhanced information retrieval with intelligent ranking algorithms'
        },
        {
            title: 'TNews - College News Portal',
            description: 'A comprehensive MERN stack news portal with secure role-based authentication and intelligent content delivery. Features a collaborative filtering recommendation engine that suggests articles based on user behavior and ratings.',
            tech: ['React', 'Express.js', 'Node.js', 'MongoDB', 'JWT', 'Nodemailer'],
            github: 'https://github.com/MayankShedge/terna-news-frontend',
            live: 'https://terna-news-frontend.vercel.app',
            image: '/TNews.png', 
            features: ['JWT authentication', 'Role-based access control', 'Email verification system', 'Recommendation engine', 'Collaborative filtering', 'Automated notifications'],
            impact: 'Personalized news experience with intelligent article recommendations'
        },
        {
            title: 'Deloitte Timesheet Portal',
            description: 'A production-ready dynamic Timesheet Management application built using Power Apps + Power Automate + SharePoint. Currently being used within Deloitte for employee timesheet management with automated workflows and manager approvals.',
            tech: ['PowerApps', 'Power Automate', 'SharePoint'],
            github: '',
            live: '',
            features: ['Validation engine with business rules', 'Status-driven dashboard', 'Automated manager notifications', 'Escalation workflows', 'Currently in production at Deloitte'],
            isProduction: true,
            impact: 'Streamlined timesheet management for Deloitte employees'
        },
        {
            title: 'Central Request Portal',
            description: 'Designed and developed a form-driven CRP platform using MERN stack + Power Platform, integrating data from Jupiter and P2W into Dataverse via SAP connectors. Implemented JWT authentication, role-based access control, and optimized MongoDB queries to improve reliability and performance.',
            tech: ['React.js', 'Express.js', 'Power Platform', 'Dataverse', 'MongoDB', 'JWT'],
            github: '',
            live: '',
            features: ['React forms', 'Status-driven dashboard', 'Connected with multiple internal portals', 'Currently in production at Deloitte'],
            isProduction: true,
            impact: 'Streamlined Central Request Portal for users to create engagements and codes for projects'
        }
    ];

    // Function to render project image
    const renderProjectImage = (project, index) => {
        const hasImage = project.image;
        const hasLiveUrl = project.live;
        
        // Determine if image should be clickable
        const isClickable = hasLiveUrl;
        
        // Image source - use real image if available, otherwise placeholder
        const imageSrc = hasImage 
            ? project.image 
            : `https://placehold.co/600x400/0a192f/64ffda?text=${encodeURIComponent(project.title)}`;

        const imageElement = (
            <div className="bg-light-navy rounded-lg overflow-hidden group h-64 md:h-80 relative">
                {/* Loading overlay for real images */}
                <div className="absolute inset-0 bg-light-navy animate-pulse" />
                
                <img 
                    src={imageSrc}
                    alt={project.title} 
                    className={cx(
                        "w-full h-full object-cover transition-all duration-300",
                        hasImage 
                            ? "filter group-hover:filter-none" // Real images: slightly filtered on default, normal on hover
                            : "mix-blend-luminosity group-hover:mix-blend-normal" // Placeholders: use mix-blend
                    )}
                    loading="lazy"
                    onLoad={(e) => {
                        // Hide loading overlay when image loads
                        const loadingOverlay = e.target.previousElementSibling;
                        if (loadingOverlay) loadingOverlay.style.display = 'none';
                    }}
                    onError={(e) => {
                        // Fallback to placeholder if real image fails to load
                        e.target.src = `https://placehold.co/600x400/0a192f/64ffda?text=${encodeURIComponent(project.title)}`;
                        e.target.className = "w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-300";
                    }}
                />
                
                {/* Click indicator overlay for clickable images */}
                {isClickable && (
                    <div className="absolute inset-0 bg-navy/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-green text-navy px-4 py-2 rounded-lg font-mono text-sm font-bold">
                            View Live Demo
                        </div>
                    </div>
                )}
                
                {/* Production badge for Deloitte projects */}
                {project.isProduction && (
                    <div className="absolute top-3 right-3 bg-green/90 text-navy text-xs px-2 py-1 rounded-full font-mono font-bold">
                        PRODUCTION
                    </div>
                )}
            </div>
        );

        // Wrap in link if clickable, otherwise return as-is
        return isClickable ? (
            <a 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block cursor-pointer"
                aria-label={`View ${project.title} live demo`}
            >
                {imageElement}
            </a>
        ) : imageElement;
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-24 pb-16"
        >
            <SectionHeader number={1} title="Things I've Built" />
            
            {/* Featured Projects */}
            <div className="space-y-24">
                {projects.map((project, i) => (
                    <motion.div 
                        key={project.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
                    >
                        {/* Project Content */}
                        <div className={cx(
                            "md:col-span-7 z-10",
                            i % 2 === 0 ? 'md:text-left' : 'md:text-right md:col-start-6'
                        )}>
                            <div className="flex items-center gap-2 mb-2">
                                <p className="text-green font-mono text-sm">Featured Project</p>
                                {project.isProduction && (
                                    <span className="bg-green/20 text-green text-xs px-2 py-1 rounded-full font-mono">
                                        PRODUCTION
                                    </span>
                                )}
                            </div>
                            
                            <h3 className="text-2xl font-bold text-lightest-slate mb-4 hover:text-green transition-colors">
                                {project.live ? (
                                    <a href={project.live} target="_blank" rel="noopener noreferrer">{project.title}</a>
                                ) : (
                                    <span>{project.title}</span>
                                )}
                            </h3>
                            
                            <div className="bg-light-navy p-6 rounded-md shadow-lg mb-4">
                                <p className="text-slate mb-4">{project.description}</p>
                                
                                <div className="space-y-2">
                                    <h4 className="text-green font-mono text-sm">Key Features:</h4>
                                    <ul className="text-slate text-sm space-y-1">
                                        {project.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <span className="text-green mr-2 mt-1">▹</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div className="mt-4 p-3 bg-navy rounded-md">
                                    <p className="text-green font-mono text-xs mb-1">Impact:</p>
                                    <p className="text-slate text-sm">{project.impact}</p>
                                </div>
                            </div>
                            
                            <ul className={cx("flex flex-wrap gap-x-4 gap-y-2 mb-4 font-mono text-sm text-slate", i % 2 !== 0 && "md:justify-end")}>
                                {project.tech.map(t => <li key={t}>{t}</li>)}
                            </ul>
                            
                            <div className={cx("flex items-center gap-4", i % 2 !== 0 && "md:justify-end")}>
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green transition-colors">
                                        <IconGitHub />
                                    </a>
                                )}
                                {project.live && (
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green transition-colors">
                                        <IconExternalLink />
                                    </a>
                                )}
                            </div>
                        </div>
                        
                        {/* Project Image */}
                        <div className={cx(
                            "md:col-span-5 h-full opacity-25 md:opacity-100",
                             i % 2 === 0 ? 'md:col-start-8' : 'md:col-start-1 md:row-start-1'
                        )}>
                            {renderProjectImage(project, i)}
                        </div>
                    </motion.div>
                ))}
            </div>
            
            {/* Call to Action */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center mt-24"
            >
                <h3 className="text-2xl font-bold text-lightest-slate mb-4">Want to see more?</h3>
                <p className="text-slate mb-8">
                    Check out my GitHub for more projects and contributions to open source.
                </p>
                <a 
                    href="https://github.com/MayankShedge" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block border border-green rounded-md px-8 py-4 text-green font-mono hover:bg-green/10 transition-all duration-300"
                >
                    View GitHub Profile
                </a>
            </motion.div>
        </motion.div>
    );
};

export default ProjectsPage;
