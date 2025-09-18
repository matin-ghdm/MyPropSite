import React from 'react';

const LatestArticleCard = ({ image, title, date, views, description, category }) => {
  return (
    <div className="group bg-white transition-all duration-300 cursor-pointer overflow-hidden">
      {/* Row 1: Image */}
      <div className="relative w-full h-40 overflow-hidden rounded-sm">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        
        {/* Scale overlay for background only */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-300" style={{ backgroundImage: `url(${image})` }}></div>
        
        {/* Fallback content if image fails to load */}
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center" style={{ display: 'none' }}>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-2 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-sm text-gray-600">تصویر مقاله</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-3">
        {/* Row 2: Tag, Date, Views */}
        <div className="flex items-center justify-between mb-2">
          {/* Category Tag */}
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 px-3 py-1" style={{
              clipPath: 'polygon(12px 0, 100% 0, 100% 100%, 12px 100%, 0 50%)'
          }}>
              <span className="text-xs text-white font-bold">{category}</span>
          </div>

          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="flex items-center space-x-1 space-x-reverse text-xs text-gray-500">
            <img src="/icons/Eye.svg" className="w-5 h-5" alt="" />
              <span>{views}</span>
            </div>
            
            <div className="flex items-center space-x-1 space-x-reverse text-xs text-gray-500">
            <img src="/icons/Calendar.svg" style={{filter: 'brightness(0)'}} className="w-4 h-4" alt="" />
              <span>{date}</span>
            </div>
          </div>
        </div>

        {/* Row 3: Title */}
        <h3 className="text-base font-bold text-gray-900 leading-relaxed mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
          {title}
        </h3>

        {/* Row 4: Description */}
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
          {description || "با زیرساختی سریع پلتفرمی ،امن و تحلیلهایی مبتنی بر داده های لحظه ای ما به تو کمک میکنیم تا فرصت ها را زودتر ببینی دقیق تر تحلیل کنی و هوشمندانه تر معامله کنی با زیرساختی سریع"}
        </p>
      </div>
    </div>
  );
};

export default LatestArticleCard;
