import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to article page
    navigate('/article');
  };
  return (
    <section className="bg-black py-24 flex items-center bg-no-repeat bg-left bg-contain" style={{backgroundImage: 'url(/images/article-image.png)'}}>
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 lg:mr-24">
        <div className="">
          {/* Right side - Content */}
          <div className="text-right space-y-6">
            {/* Author and Date */}
            <div className="flex items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <img src="/icons/Doc.svg" alt="" />
                <span className="text-sm">سروش نوروزی</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <img src="/icons/Calendar.svg" alt="" />
                <span className="text-sm">۳ روز پیش</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              چگونه در فارکس ضرر نکنیم:
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl lg:text-2xl text-white leading-relaxed">
              راهکارهای مؤثر برای معامله گران موفق
            </h2>

            {/* CTA Button */}
            <div className="pt-4">
              <button 
                onClick={handleButtonClick}
                className="inline-flex items-center space-x-3 space-x-reverse bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors shadow-lg"
              >
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.1863 12H4.18628M4.18628 12L10.1863 6M4.18628 12L10.1863 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
                <span>مطالعه مقاله</span>
              </button>
            </div>
          </div>

          {/* Left side - Phone Mockup */}
          {/* <div className="flex justify-center lg:justify-start">
            <img src="/images/article-image.png" alt="" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
