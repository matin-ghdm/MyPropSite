import React from 'react';
import MainVideoCard from '../cards/MainVideoCard';
import SmallVideoCard from '../cards/SmallVideoCard';

const LastVideosSection = () => {
  const videos = [
    {
      id: 1,
      title: "چگونه در فارکس ضرر نکنیم: راهکارهای مؤثر برای معامله گران موفق",
      category: "آموزش فارکس",
      thumbnail: "/images/article-image.png"
    },
    {
      id: 2,
      title: "چگونه در فارکس ضرر نکنیم: راهکارهای مؤثر برای معامله گران موفق",
      category: "آموزش فارکس",
      thumbnail: "/images/3.png"
    },
    {
      id: 3,
      title: "چگونه در فارکس ضرر نکنیم: راهکارهای مؤثر برای معامله گران موفق",
      category: "آموزش فارکس",
      thumbnail: "/images/4.png"
    },
    {
      id: 4,
      title: "چگونه در فارکس ضرر نکنیم: راهکارهای مؤثر برای معامله گران موفق",
      category: "آموزش فارکس",
      thumbnail: "/images/4.png"
    },
    {
      id: 5,
      title: "چگونه در فارکس ضرر نکنیم: راهکارهای مؤثر برای معامله گران موفق",
      category: "آموزش فارکس",
      thumbnail: "/images/4.png"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className="w-1 h-8 bg-black rounded-4xl ml-4"></div>
            <h2 className="text-2xl font-bold text-gray-900">آخرین ویدیو ها</h2>
          </div>
          <button className="flex items-center space-x-2 space-x-reverse bg-[#19CCA7] hover:bg-emerald-600 text-white px-6 py-3 rounded-sm transition-colors duration-300">
            <img src="/icons/Eye.svg" style={{filter: 'brightness(100)'}} className="w-5 h-5" alt="" />
            <span>مشاهده همه ویدیوها</span>
          </button>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Small Video Cards Grid */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-2 gap-4">
              {videos.slice(1).map((video) => (
                <SmallVideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
          
          {/* Main Video Card */}
          <div className="lg:col-span-1">
            <MainVideoCard video={videos[0]} />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default LastVideosSection;
