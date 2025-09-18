import React from 'react';
import CurrencyCard from '../cards/CurrencyCard';

const DigitalCurrenciesSection = () => {
  const currencies = [
    { currency: 'EURUSD', price: '0.2688', change: '5.71', changeValue: '7.61', isPositive: true },
    { currency: 'EURUSD', price: '0.2688', change: '5.71', changeValue: '7.61', isPositive: true },
    { currency: 'EURUSD', price: '0.2688', change: '5.71', changeValue: '7.61', isPositive: true },
    { currency: 'EURUSD', price: '0.2688', change: '5.71', changeValue: '7.61', isPositive: true },
    { currency: 'EURUSD', price: '0.2688', change: '5.71', changeValue: '7.61', isPositive: true },
    { currency: 'EURUSD', price: '0.2688', change: '5.71', changeValue: '7.61', isPositive: true },
  ];

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-6">
          <div className="w-1 h-8 bg-black ml-4 rounded-4xl"></div>
          <h2 className="text-2xl font-bold text-gray-900">ارزهای دیجیتال</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currencies.map((currency, index) => (
            <CurrencyCard
              key={index}
              currency={currency.currency}
              price={currency.price}
              change={currency.change}
              changeValue={currency.changeValue}
              isPositive={currency.isPositive}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalCurrenciesSection;
