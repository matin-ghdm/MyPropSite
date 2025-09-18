import React from 'react';
import EducationalArticleCard from '../cards/EducationalArticleCard';

const EducationalArticlesSection = () => {
  const articles = [
    {
      title: "چگونه در فارکس ضرر نکنیم: راهکارهای مؤثر",
      date: "۳ روز پیش",
      views: "۴۴ بازدید",
      image: "/images/3.png",
      isWide: false
    },
    {
      title: "چگونه در فارکس ضرر نکنیم: راهکارهای مؤثر",
      date: "۳ روز پیش",
      views: "۴۴۰ بازدید",
      image: "/images/4.png",
      isWide: false
    },
    {
      title: "چگونه در فارکس ضرر نکنیم: راهکارهای مؤثر",
      date: "۳ روز پیش",
      views: "۴۴ بازدید",
      image: "/images/article-image.png",
      isWide: true
    },
    {
      title: "چگونه در فارکس ضرر نکنیم: راهکارهای مؤثر",
      date: "۳ روز پیش",
      views: "۴۴ بازدید",
      image: "/images/article-image.png",
      isWide: false
    },
    {
      title: "چگونه در فارکس ضرر نکنیم: راهکارهای مؤثر",
      date: "۳ روز پیش",
      views: "۴۴ بازدید",
      image: "/images/zarar.png",
      isWide: false
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-12">
          <div className="w-1 h-8 bg-black rounded-4xl ml-4"></div>
          <h2 className="text-3xl font-bold text-gray-900">مقالات آموزشی</h2>
        </div>

        {/* Articles Grid */}
        <div className='flex items-stretch justify-center gap-4'>
             
             <div className="lg:w-2/5">
                 <div className="md:col-span-2 h-full">
                     <EducationalArticleCard {...articles[2]} isWide={true} />
                 </div>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-2 gap-4 w-full lg:w-3/5">
                 {/* Top row - 3 articles */}
                 <div className="md:col-span-1">
                     <EducationalArticleCard {...articles[0]} />
                 </div>
                 <div className="md:col-span-1">
                     <EducationalArticleCard {...articles[1]} />
                 </div>
                 
                 {/* Bottom row - 2 articles */}
                 <div className="md:col-span-1">
                     <EducationalArticleCard {...articles[3]} />
                 </div>
                 <div className="md:col-span-1">
                     <EducationalArticleCard {...articles[4]} />
                 </div>
             </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalArticlesSection;
