import React from 'react';

export default function TagBadge({ text, color = 'bg-green-600', textColor = 'text-white', className = '' }) {
  return (
    <span 
      className={`${color} ${textColor} px-4 py-2 rounded-sm text-sm font-medium transition-colors ${className}`}
      style={{
        clipPath: 'polygon(12px 0, 100% 0, 100% 100%, 12px 100%, 0 50%)'
      }}
    >
      {text}
    </span>
  );
}
