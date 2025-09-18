import React from 'react';

const PopularArticleCard = ({ image, title, category }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer h-52">
      {/* Background Image */}
      <div 
        className="relative w-full h-full bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden"
        style={{ backgroundImage: `url(${image})` }}
        onError={(e) => {
          e.target.style.backgroundImage = 'none';
          e.target.style.backgroundColor = '#f3f4f6';
        }}
      >
        {/* Scale overlay for background only */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-300" style={{ backgroundImage: `url(${image})` }}></div>
        {/* Fallback content if image fails to load */}
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded-lg" style={{ display: 'none' }}>
          <div className="text-center">
            <div className="w-8 h-8 bg-gray-400 rounded-full mx-auto mb-1 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-xs text-gray-600">تصویر</p>
          </div>
        </div>

        {/* Category Label */}
        <div className="absolute top-2 right-2 bg-gradient-to-b from-gray-800 to-gray-900 px-3 py-1" style={{
          clipPath: 'polygon(12px 0, 100% 0, 100% 100%, 12px 100%, 0 50%)'
        }}>
          <span className="text-xs text-white font-bold">{category}</span>
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/60 backdrop-blur-sm rounded-b-lg">
          {/* Title */}
          <h3 className="text-sm font-semibold text-white leading-relaxed line-clamp-2 group-hover:text-blue-200 transition-colors duration-300">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PopularArticleCard;
