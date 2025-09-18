import React, { useState } from 'react';

const ExpandableSummary = ({ title = "خلاصه آنچه در مقاله میخوانیم", items = [] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white border border-gray-300 rounded-lg mb-8">
      {/* Header with toggle button */}
      <div 
        className="flex items-center justify-between p-6 cursor-pointer group hover:bg-gray-50 transition-colors"
        onClick={toggleExpanded}
      >
        <div className="flex items-center gap-3">
          {/* Document icon with green bar */}
          <div className="flex items-center gap-2">
            <div className="w-1 h-6 bg-green-500 rounded-full"></div>
            <img src="/icons/Docs.svg" className="w-5 h-5" alt="" />
          </div>
          <h2 className="text-lg font-bold text-gray-900">
            {title}
          </h2>
        </div>
        
        {/* Toggle button */}
        <button className="p-1 border border-gray-400 rounded-md hover:cursor-pointer group-hover:bg-gray-200 transition-colors">
          <svg 
            className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
              isExpanded ? 'rotate-180' : ''
            }`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Collapsible content */}
      <div className={`overflow-hidden transition-all duration-600 ease-in-out ${
        isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-6 pb-6">
          <ul className="space-y-3">
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-6 h-[5px] bg-black rounded-full"></div>
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExpandableSummary;
