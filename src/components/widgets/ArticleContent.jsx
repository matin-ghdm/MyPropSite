import React from 'react';
import ArticleDetails from './ArticleDetails';
import PopularArticles from './PopularArticles';

const ArticleContent = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Latest Articles - Right Side */}
          <div className="lg:col-span-2">
            <ArticleDetails />
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

export default ArticleContent;
