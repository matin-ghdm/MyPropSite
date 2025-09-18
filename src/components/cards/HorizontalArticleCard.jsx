import React from 'react';

const HorizontalArticleCard = ({ image, title, date, views, index }) => {
  return (
    <div className="overflow-hidden hover:cursor-pointer transition-shadow duration-300 flex">
        
      <div className="w-1/3 relative items-center justify-center">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full rounded-sm object-cover"
          onError={(e) => {
            
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        
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
      
      
      <div className="w-2/3 pr-2 flex flex-col justify-between">
      
        <p className="text-sm font-bold text-gray-900 leading-relaxed line-clamp-3">
          {title}
        </p>
        
        
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <div className="flex items-center space-x-2 space-x-reverse">
          <img src="/icons/Calendar.svg" className="w-5 h-5" style={{filter: 'brightness(0)'}} alt="" />
            <span>{date}</span>
          </div>
          
          <div className="flex items-center space-x-2 space-x-reverse">
          <img src="/icons/Eye.svg" className="w-5 h-5" alt="" />
            <span>{views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalArticleCard;
