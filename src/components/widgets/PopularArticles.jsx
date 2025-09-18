import React from 'react';
import PopularArticleCard from '../cards/PopularArticleCard';

const PopularArticles = () => {
  const articles = [
    {
      title: "چگونه در فارکس ضرر نکنیم: راهکارهای مؤثر برای معامله گران موفق",
      image: "/images/3.png",
      category: "آموزش فارکس"
    },
    {
      title: "چگونه در فارکس ضرر نکنیم: راهکارهای مؤثر برای معامله گران موفق",
      image: "/images/4.png",
      category: "آموزش فارکس"
    },
    {
      title: "چگونه در فارکس ضرر نکنیم: راهکارهای مؤثر برای معامله گران موفق",
      image: "/images/article-image.png",
      category: "آموزش فارکس"
    },
    {
      title: "چگونه در فارکس ضرر نکنیم: راهکارهای مؤثر برای معامله گران موفق",
      image: "/images/zarar.png",
      category: "آموزش فارکس"
    }
  ];

  return (
    <div className="sticky top-8 mx-4 lg:mx-0">
      {/* Header */}
      <div className="flex items-center mb-8">
        <div className="w-1 h-8 bg-black rounded-4xl ml-4"></div>
        <h2 className="text-2xl font-bold text-gray-900">محبوب ترین مقالات</h2>
      </div>

      {/* Articles List */}
      <div className="space-y-4">
        {articles.map((article, index) => (
          <PopularArticleCard
            key={index}
            title={article.title}
            image={article.image}
            category={article.category}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularArticles;
