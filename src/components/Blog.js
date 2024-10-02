// src/components/Blog.js
import React from 'react';

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gray-700 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">Blog/Articles</h2>
        <a
          href="https://yourblogspotlink.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Visit My Blogspot
        </a>
      </div>
    </section>
  );
};

export default Blog;
