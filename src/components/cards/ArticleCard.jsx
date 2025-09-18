import React from 'react';

const ArticleCard = ({ image, title, date, views, index }) => {
  return (
    <div className="rounded-lg overflow-hidden hover:cursor-pointer transition-shadow duration-300">
      {/* Image */}
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 rounded-lg object-cover"
          onError={(e) => {
            // Fallback if image fails to load
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        {/* Fallback content if image fails to load */}
        <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center" style={{ display: 'none' }}>
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
      
      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-sm font-medium text-gray-900 leading-relaxed mb-3 line-clamp-2">
          {title}
        </h3>
        
        {/* Metadata */}
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <div className="flex items-center space-x-1 space-x-reverse">
          <img src="/icons/Calendar.svg" className="w-5 h-5" style={{filter: 'brightness(0)'}} alt="" />
            <span>{date}</span>
          </div>
          
          <div className="flex items-center space-x-1 space-x-reverse">
          <img src="/icons/Eye.svg" className="w-5 h-5" alt="" />
            <span>{views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
