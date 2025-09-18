import React, { useState } from 'react';
import HorizontalArticleCard from '../cards/HorizontalArticleCard';

const EditorsChoiceSection = () => {
  const [activeFilter, setActiveFilter] = useState('آموزش فارکس');

  const filters = ['همه', 'آموزش فارکس', 'پراپ تریدینگ'];

  const articles = [
    {
      title: "چگونه در فارکس ضرر نکنیم: راهکارهای مؤثر برای معامله گران موفق",
      date: "۳ روز پیش",
      views: "۴۴ بازدید",
      image: "/images/article-image.png",
      index: 0
    },
    {
      title: "چگونه در فارکس ضرر نکنیم: راهکارهای مؤثر برای معامله گران موفق",
      date: "۳ روز پیش",
      views: "۴۴ بازدید",
      image: "/images/zarar.png",
      index: 1
    },
    {
      title: "چگونه در فارکس ضرر نکنیم: راهکارهای مؤثر برای معامله گران موفق",
      date: "۳ روز پیش",
      views: "۴۴ بازدید",
      image: "/images/3.png",
      index: 2
    }
  ];

  return (
    <section className="lg:py-24 py-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex items-center mb-8">
          <div className="w-1 h-10 bg-black ml-4 rounded-4xl"></div>
          <h2 className="text-3xl font-bold text-gray-900">انتخاب سردبیر</h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex space-x-4 space-x-reverse mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-gray-800 text-white'
                  : 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <HorizontalArticleCard
              key={index}
              title={article.title}
              date={article.date}
              views={article.views}
              image={article.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorsChoiceSection;
