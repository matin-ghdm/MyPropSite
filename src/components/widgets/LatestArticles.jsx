import React from 'react';
import LatestArticleCard from '../cards/LatestArticleCard';

const LatestArticles = () => {
  const articles = [
    {
      title: "چگونه در فارکس ضرر نکنیم: راهکارهای مؤثر برای معامله گران موفق",
      date: "۳ روز پیش",
      views: "۱۴۴ بازدید",
      image: "/images/article-image.png",
      description: "با زیرساختی سریع پلتفرمی ،امن و تحلیلهایی مبتنی بر داده های لحظه ای ما به تو کمک میکنیم تا فرصت ها را زودتر ببینی دقیق تر تحلیل کنی و هوشمندانه تر معامله کنی",
      category: "آموزش فارکس"
    },
    {
      title: "چگونه در فارکس ضرر نکنیم: راهکارهای مؤثر برای معامله گران موفق",
      date: "۳ روز پیش",
      views: "۴۴۰ بازدید",
      image: "/images/3.png",
      description: "با زیرساختی سریع پلتفرمی ،امن و تحلیلهایی مبتنی بر داده های لحظه ای ما به تو کمک میکنیم تا فرصت ها را زودتر ببینی",
      category: "تحلیل تکنیکال"
    },
    {
      title: "چگونه در فارکس ضرر نکنیم: راهکارهای مؤثر برای معامله گران موفق",
      date: "۳ روز پیش",
      views: "۴۴ بازدید",
      image: "/images/4.png",
      description: "با زیرساختی سریع پلتفرمی ،امن و تحلیلهایی مبتنی بر داده های لحظه ای ما به تو کمک میکنیم تا فرصت ها را زودتر ببینی",
      category: "مدیریت ریسک"
    },
    {
      title: "چگونه در فارکس ضرر نکنیم: راهکارهای مؤثر برای معامله گران موفق",
      date: "۳ روز پیش",
      views: "۴۴ بازدید",
      image: "/images/4.png",
      description: "با زیرساختی سریع پلتفرمی ،امن و تحلیلهایی مبتنی بر داده های لحظه ای ما به تو کمک میکنیم تا فرصت ها را زودتر ببینی",
      category: "اخبار بازار"
    },
    {
      title: "چگونه در فارکس ضرر نکنیم: راهکارهای مؤثر برای معامله گران موفق",
      date: "۳ روز پیش",
      views: "۴۴ بازدید",
      image: "/images/4.png",
      description: "با زیرساختی سریع پلتفرمی ،امن و تحلیلهایی مبتنی بر داده های لحظه ای ما به تو کمک میکنیم تا فرصت ها را زودتر ببینی",
      category: "روانشناسی معاملات"
    }
  ];

  return (
    <div className='mx-4 lg:mx-0'>
      {/* Header */}
      <div className="flex items-center mb-8 ">
        <div className="w-1 h-8 bg-black rounded-4xl ml-4"></div>
        <h2 className="text-2xl font-bold text-gray-900">آخرین مقالات</h2>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <LatestArticleCard key={index} {...article} />
          ))}
      </div>
      <button className="block mx-auto mt-4 bg-[#19CCA7] hover:bg-emerald-600 hover:cursor-pointer transition-colors duration-300 text-white px-6 py-2 rounded-sm">
         مشاهده همه مقالات
      </button>
    </div>
  );
};

export default LatestArticles;
