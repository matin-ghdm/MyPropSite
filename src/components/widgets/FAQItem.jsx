import React from 'react';

const FAQItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-right flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          {/* <span className="text-xs bg-teal-100 text-teal-600 px-2 py-1 rounded-full">
            {item.category}
          </span> */}
          <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
        </div>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      
      {isOpen && (
        <div className="px-6 pb-4 border-t border-gray-100">
          <p className="text-gray-600 leading-relaxed pt-4">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
