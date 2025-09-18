import React from 'react';

const EducationalArticleCard = ({ image, title, date, views, isWide = false }) => {
  return (
    <div className={`group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer ${isWide ? 'h-full' : ''}`}>
      {/* Background Image */}
      <div 
        className={`relative w-full bg-cover bg-center bg-no-repeat rounded-lg transition-transform duration-300 ${isWide ? 'h-full' : 'h-40'}`}
        style={{ backgroundImage: `url(${image})` }}
        onError={(e) => {
          e.target.style.backgroundImage = 'none';
          e.target.style.backgroundColor = '#f3f4f6';
        }}
      >
        {/* Fallback content if image fails to load */}
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded-lg" style={{ display: 'none' }}>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-2 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-sm text-gray-600">تصویر مقاله</p>
          </div>
        </div>

        {/* Share Icon */}
        <div className="absolute top-3 right-3 bg-gray-800/80 backdrop-blur-sm rounded-md p-1.5 hover:scale-110 transition-transform duration-300">
          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
          </svg>
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 rounded-b-lg">
          {/* Metadata */}
          <div className="flex items-center gap-2 text-xs text-white mb-3">
            <div className="flex items-center space-x-1 space-x-reverse">
            <img src="/icons/Calendar.svg" className="w-5 h-5" alt="" />
              <span>{date}</span>
            </div>
            
            <div className="flex items-center space-x-1 space-x-reverse">
            <img src="/icons/Eye.svg" style={{filter: 'brightness(100)'}} className="w-5 h-5" alt="" />
              <span>{views}</span>
            </div>
          </div>
          
          {/* Title */}
          <h3 className="text-sm font-semibold text-white leading-relaxed line-clamp-2 group-hover:text-blue-200 transition-colors duration-300">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default EducationalArticleCard;
