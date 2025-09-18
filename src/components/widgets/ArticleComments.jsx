import React, { useState } from 'react';
import CommentCell from './CommentCell';

const ArticleComments = () => {
  const [showReplies, setShowReplies] = useState({});

  // Sample comments data
  const comments = [
    {
      id: 1,
      user: {
        name: 'سروش نوروزی',
        avatar: '/api/placeholder/40/40',
        date: 'دوشنبه ۱۷ بهمن ۱۴۰۱ ساعت ۱۲:۴۰'
      },
      content: 'چگونه در فارکس ضرر نکنیم: راهکارهای مؤثر برای معامله گران موفق',
      repliesCount: 12,
      likes: 0,
      dislikes: 0
    },
    {
      id: 2,
      user: {
        name: 'سروش نوروزی',
        avatar: '/api/placeholder/40/40',
        date: 'دوشنبه ۱۷ بهمن ۱۴۰۱ ساعت ۱۲:۴۰'
      },
      content: 'چگونه در فارکس ضرر نکنیم: راهکارهای مؤثر برای معامله گران موفق',
      repliesCount: 12,
      likes: 0,
      dislikes: 0
    },
    {
      id: 3,
      user: {
        name: 'سروش نوروزی',
        avatar: '/api/placeholder/40/40',
        date: 'دوشنبه ۱۷ بهمن ۱۴۰۱ ساعت ۱۲:۴۰'
      },
      content: 'چگونه در فارکس ضرر نکنیم: راهکارهای مؤثر برای معامله گران موفق',
      repliesCount: 12,
      likes: 0,
      dislikes: 0
    }
  ];

  const toggleReplies = (commentId) => {
    setShowReplies(prev => ({
      ...prev,
      [commentId]: !prev[commentId]
    }));
  };

  return (
    <div className="max-w-7xl rounded-lg bg-white border border-gray-200 mx-auto px-6 py-8 my-8" dir="rtl">
      {/* Header Section */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-8 rounded-lg bg-teal-500"></div>
            <img src="/icons/message-chat-right-text-comments.svg" className="w-5 h-5" alt="" />
          <h2 className="text-xl font-bold text-gray-900">نظرات کاربران</h2>
        </div>

        {/* Login Section */}
        <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <p className="text-gray-600">برای ثبت نظر خود وارد شوید.</p>
            <div className="flex items-center gap-3">
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-sm flex items-center gap-2 transition-colors">
                ورود و ثبت نام
                <img src="/icons/User, Profile, Edit.svg" className="w-5 h-5" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <CommentCell
            key={comment.id}
            comment={comment}
            showReplies={showReplies[comment.id] || false}
            onToggleReplies={() => toggleReplies(comment.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleComments;
