// src/components/CodingPlatforms.js
import React from 'react';

const CodingPlatforms = () => {
  return (
    <section id="coding-platforms" className="py-20 bg-gray-700 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Coding Platforms</h2>
        <div className="mt-6">
          <a
            href="https://leetcode.com/u/MaYaNk___1304/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 mb-4 max-w-xs mx-auto"
          >
            LeetCode Profile
          </a>
          <a
            href="https://www.naukri.com/code360/profile/MayankShedge"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 max-w-xs mx-auto"
          >
            Coding Ninjas Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default CodingPlatforms;
