import React from 'react';

const CurrencyCard = ({ currency, price, change, changeValue, isPositive = true }) => {
  return (
    <div style={{direction: 'ltr'}} className="p-4 border-b-1 border-gray-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img 
              src="/images/EURUSD.png" 
              alt={currency} 
              className="w-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-sm">{currency}</h3>
            <p className="text-xs text-gray-500">Forex</p>
          </div>
        </div>
        <div className="text-left">
          <p className="font-bold text-gray-900 text-sm">$ {price}</p>
          <p className={`text-xs font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? '+' : ''}{change}% {isPositive ? '+' : ''}{changeValue}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrencyCard;
