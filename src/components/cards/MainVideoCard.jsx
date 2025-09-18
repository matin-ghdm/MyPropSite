import React from 'react';

const MainVideoCard = ({ video }) => {
  return (
    <div className="group relative w-full h-full transition-all duration-300 cursor-pointer overflow-hidden rounded-sm">
      {/* Background Image */}
      <img 
        src={video.thumbnail} 
        alt={video.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      
      {/* Fallback content if image fails to load */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center" style={{ display: 'none' }}>
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-2 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-sm text-gray-600">تصویر ویدیو</p>
        </div>
      </div>

      {/* Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img src="/images/Puase.png" alt="play" />
      </div>

      {/* Video Info - Positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
        <div className="mb-3">
          <span className="bg-emerald-500 text-white px-3 py-1 rounded-sm text-sm font-bold" style={{
              clipPath: 'polygon(12px 0, 100% 0, 100% 100%, 12px 100%, 0 50%)'
          }}>
            {video.category}
          </span>
        </div>
        <h3 className="text-lg font-bold leading-relaxed group-hover:text-emerald-400 transition-colors duration-300 text-white">
          {video.title}
        </h3>
      </div>
    </div>
  );
};

export default MainVideoCard;
