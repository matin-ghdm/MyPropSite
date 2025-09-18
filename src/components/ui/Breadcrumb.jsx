import React from 'react';
import { useNavigate } from 'react-router-dom';

const Breadcrumb = ({ items }) => {
  const navigate = useNavigate();

  const handleItemClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <nav className="bg-white py-4 lg:mt-16">
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex items-center gap-2 text-sm">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
              <svg className="w-4 h-4 rotate-90" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              )}
              <span
                className={`${
                  index === items.length - 1
                    ? 'text-gray-900 font-medium'
                    : 'text-gray-500 hover:text-gray-700 cursor-pointer'
                }`}
                onClick={() => handleItemClick(item.path)}
              >
                {item.label}
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumb;

