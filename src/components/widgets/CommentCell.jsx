import React, { useState } from 'react';

const CommentCell = ({ comment, showReplies, onToggleReplies }) => {
  const [likes, setLikes] = useState(comment.likes);
  const [dislikes, setDislikes] = useState(comment.dislikes);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLike = () => {
    if (isDisliked) {
      setDislikes(prev => prev - 1);
      setIsDisliked(false);
    }
    if (isLiked) {
      setLikes(prev => prev - 1);
      setIsLiked(false);
    } else {
      setLikes(prev => prev + 1);
      setIsLiked(true);
    }
  };

  const handleDislike = () => {
    if (isLiked) {
      setLikes(prev => prev - 1);
      setIsLiked(false);
    }
    if (isDisliked) {
      setDislikes(prev => prev - 1);
      setIsDisliked(false);
    } else {
      setDislikes(prev => prev + 1);
      setIsDisliked(true);
    }
  };

  return (
    <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 shadow-sm">
      {/* User Info and Date */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-medium text-gray-900">{comment.user.name}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600 text-sm">
            
          <img src="/icons/Calendar.svg" style={{filter: 'brightness(0)'}} className="w-5 h-5" alt="" />
            <span>{comment.user.date}</span>
          </div>
          
        </div>

        
          <div className="flex items-center gap-3">
            {/* Like Button */}
            <button 
              onClick={handleLike}
              className={`w-8 h-8 rounded flex items-center justify-center transition-colors hover:cursor-pointer ${
                isLiked 
                  ? 'bg-teal-100 text-teal-500' 
                  : 'border-teal-200 hover:border-teal-300 text-gray-400'
              }`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.834a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
            </button>

            {/* Dislike Button */}
            <button 
              onClick={handleDislike}
              className={`w-8 h-8 rounded flex items-center justify-center transition-colors hover:cursor-pointer ${
                isDisliked 
                  ? 'bg-teal-100 text-teal-500' 
                  : 'border-gray-200 hover:border-gray-300 text-gray-400'
              }`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.834a2 2 0 00-1.106-1.79l-.05-.025A4 4 0 0011.057 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
              </svg>
            </button>

            {/* Reply Button */}
            <button className="bg-teal-100 hover:bg-teal-200 text-teal-500 hover:cursor-pointer px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition-colors">
              پاسخ
              <svg className="w-4 h-4 -rotate-90" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>

          </div>
      </div>

      {/* Comment Content */}
      <div className="mb-4">
        <p className="text-gray-900 leading-relaxed">{comment.content}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between">

        {/* Show Replies */}
        {comment.repliesCount > 0 && (
          <button 
            onClick={onToggleReplies}
            className="flex items-center gap-1 text-gray-600 hover:text-teal-600 transition-colors text-sm"
          >
            <span>نمایش {comment.repliesCount} پاسخ</span>
            <svg 
              className={`w-4 h-4 transition-transform ${showReplies ? 'rotate-180' : ''}`} 
              fill="currentColor" 
              viewBox="0 0 20 20"
              >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>

      {/* Replies Section (when expanded) */}
      {showReplies && comment.repliesCount > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="space-y-3">
            {/* Sample reply - you can expand this to show actual replies */}
            <div className="bg-gray-50 rounded-lg p-3 mr-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-900">کاربر دیگر</span>
                <span className="text-xs text-gray-500">دیروز</span>
              </div>
              <p className="text-sm text-gray-700">این یک پاسخ نمونه است...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentCell;
