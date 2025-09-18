import React from 'react';

const SmallVideoCard = ({ video }) => {
  return (
    <div className="group bg-white transition-all duration-300 cursor-pointer overflow-hidden rounded-sm p-4 border border-gray-300">
      {/* Video Thumbnail */}
      <div className="relative w-full h-36 overflow-hidden rounded-sm">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform rounded-xl duration-300"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        
        {/* Fallback content if image fails to load */}
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center" style={{ display: 'none' }}>
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-400 rounded-full mx-auto mb-2 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-xs text-gray-600">تصویر ویدیو</p>
          </div>
        </div>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img className='w-32 h-32' src="/images/Puase.png" alt="play" />
        </div>

        {/* Category Tag */}
        <div className="absolute top-2 right-2">
          <span 
          className="bg-gray-900 bg-opacity-80 text-white px-2 py-1 rounded-sm text-xs font-bold"
          style={{
              clipPath: 'polygon(12px 0, 100% 0, 100% 100%, 12px 100%, 0 50%)'
          }}>
            {video.category}
          </span>
        </div>

      </div>

      {/* Video Info */}
      <div className="pt-4">
        <h3 className="text-sm font-bold leading-relaxed group-hover:text-emerald-400 transition-colors duration-300 line-clamp-2">
          {video.title}
        </h3>
      </div>
    </div>
  );
};

export default SmallVideoCard;
