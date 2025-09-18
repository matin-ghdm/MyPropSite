import React from 'react';
import LatestArticles from '../widgets/LatestArticles';
import PopularArticles from '../widgets/PopularArticles';

const BlogsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Latest Articles - Right Side */}
          <div className="lg:col-span-2">
            <LatestArticles />
          </div>


          {/* Popular Articles - Left Side */}
          <div className="lg:col-span-1">
            <PopularArticles />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
