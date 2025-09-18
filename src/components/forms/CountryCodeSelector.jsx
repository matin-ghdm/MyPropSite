import React, { useState } from 'react';

const CountryCodeSelector = ({ value, onChange, name, error }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    code: 'IR',
    name: 'ایران',
    dialCode: '+98',
    flag: '🇮🇷'
  });

  const countries = [
    { code: 'IR', name: 'ایران', dialCode: '+98', flag: '🇮🇷' },
    { code: 'US', name: 'آمریکا', dialCode: '+1', flag: '🇺🇸' },
    { code: 'GB', name: 'انگلستان', dialCode: '+44', flag: '🇬🇧' },
    { code: 'DE', name: 'آلمان', dialCode: '+49', flag: '🇩🇪' },
    { code: 'FR', name: 'فرانسه', dialCode: '+33', flag: '🇫🇷' },
    { code: 'CA', name: 'کانادا', dialCode: '+1', flag: '🇨🇦' },
  ];

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  const handleInputChange = (e) => {
    // Only allow numbers
    const numericValue = e.target.value.replace(/[^0-9]/g, '');
    onChange({
      target: {
        name: name,
        value: numericValue
      }
    });
  };

  return (
    <div className="w-full">
      <div className="flex border border-gray-300 rounded-lg bg-white">
        {/* Country Code Selector */}
        <div className="relative">
          <button
            type="button"
            onClick={() => {
              console.log('Opening dropdown, current state:', isOpen);
              setIsOpen(!isOpen);
            }}
            className={`flex items-center px-4 py-3 bg-white border-r hover:bg-gray-50 min-w-[120px] ${
              error ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <span className="text-lg ml-2">{selectedCountry.flag}</span>
            <span className="text-gray-700 font-medium">{selectedCountry.dialCode}</span>
            <svg 
              className={`w-4 h-4 mr-2 text-gray-500 transition-transform ${
                isOpen ? 'rotate-180' : ''
              }`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute top-full left-0 right-0 z-50 w-fit mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
              <div className="max-h-48 overflow-y-auto">
                {countries.map((country, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      console.log('Country selected:', country);
                      handleCountrySelect(country);
                    }}
                    className="w-full flex items-center px-4 py-2 text-right hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                  >
                    <span className="text-lg ml-2">{country.flag}</span>
                    <span className="text-gray-700 font-medium ml-2">{country.dialCode}</span>
                    <span className="text-gray-500 text-sm mr-2 flex-1 text-right">{country.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Mobile Number Input */}
        <input
          type="tel"
          name={name}
          value={value}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            // Allow: backspace, delete, tab, escape, enter, home, end, left, right, up, down
            if ([8, 9, 27, 13, 46, 35, 36, 37, 38, 39, 40].indexOf(e.keyCode) !== -1 ||
                // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
                (e.keyCode === 65 && e.ctrlKey === true) ||
                (e.keyCode === 67 && e.ctrlKey === true) ||
                (e.keyCode === 86 && e.ctrlKey === true) ||
                (e.keyCode === 88 && e.ctrlKey === true) ||
                // Allow: numbers 0-9
                (e.keyCode >= 48 && e.keyCode <= 57) ||
                // Allow: numpad numbers 0-9
                (e.keyCode >= 96 && e.keyCode <= 105)) {
              return;
            }
            // Block everything else
            e.preventDefault();
          }}
          placeholder="شماره موبایل را وارد نمایید"
          className={`flex-1 px-4 py-3 border-0 focus:outline-none text-right ${
            error ? 'text-red-600' : ''
          }`}
          dir="ltr"
          maxLength={15}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default CountryCodeSelector;
