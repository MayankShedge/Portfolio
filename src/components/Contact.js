// src/components/Contact.js
// src/components/Contact.js
import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <motion.h2 
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        <motion.p 
          className="text-lg mb-4"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Email: <span className="font-semibold">shedgemayank0@gmail.com</span>
        </motion.p>
        <motion.p 
          className="text-lg mb-4"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Phone: <span className="font-semibold">8355904926</span>
        </motion.p>
        <div className="flex justify-center space-x-4 mt-6">
          <motion.a 
            href="https://www.linkedin.com/in/mayank-shedge-899381230" 
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            LinkedIn
          </motion.a>
          <motion.a 
            href="https://github.com/MayankShedge" 
            className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-300"
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
