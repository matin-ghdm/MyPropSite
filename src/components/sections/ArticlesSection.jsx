import React from 'react';
import ArticleCard from '../cards/ArticleCard';
import AnimatedSection from '../ui/AnimatedSection';

const ArticlesSection = () => {
  const articles = [
    {
      title: "چگونه در فارکس ضرر نکنیم راهکارهای مؤثر برای معامله گران موفق",
      date: "۳ روز پیش",
      views: "۴۴ بازدید",
      image: "/images/article-image.png",
      index: 0
    },
    {
      title: "چگونه در فارکس ضرر نکنیم راهکارهای مؤثر برای معامله گران موفق",
      date: "۳ روز پیش",
      views: "۴۴ بازدید",
      image: "/images/zarar.png",
      index: 1
    },
    {
      title: "چگونه در فارکس ضرر نکنیم راهکارهای مؤثر برای معامله گران موفق",
      date: "۳ روز پیش",
      views: "۴۴ بازدید",
      image: "/images/3.png",
      index: 2
    },
    {
      title: "چگونه در فارکس ضرر نکنیم راهکارهای مؤثر برای معامله گران موفق",
      date: "۳ روز پیش",
      views: "۴۴ بازدید",
      image: "/images/4.png",
      index: 3
    }
  ];

  return (
    <section className="">
      <div className="max-w-7xl p-5 rounded-2xl bg-gradient-to-b from-gray-800 via-gray-100 to-white mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
          <AnimatedSection delay={600}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {articles.map((article, index) => (
                <ArticleCard
                  key={index}
                  title={article.title}
                  date={article.date}
                  views={article.views}
                  image={article.image}
                  index={index}
                />
              ))}
            </div>
          </AnimatedSection>
      </div>
    </section>
  );
};

export default ArticlesSection;
