import React, { useState, useEffect } from 'react';

const ImageSlideshow = ({ slidesData = [], autoPlay = true, interval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || slidesData.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, slidesData.length]);

  // Handle manual navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  if (!slidesData || slidesData.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center px-8 bg-gray-200 min-h-[400px]">
        <p className="text-gray-500">هیچ اسلایدی برای نمایش وجود ندارد</p>
      </div>
    );
  }

  const currentSlideData = slidesData[currentSlide];

  return (
    <div className=" flex-col justify-center items-center px-8 bg-gray-200 relative hidden lg:flex">
      <div className="relative w-full max-w-md">
        {/* Main Image */}
        <img 
          src={currentSlideData.image} 
          alt={currentSlideData.alt || "Slideshow Image"} 
          className="w-full h-auto "
        />

      </div>

      {/* Text Content */}
      <div className="text-center mt-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {currentSlideData.title}
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          {currentSlideData.description}
        </p>
      </div>

      
        {/* Slide Indicators - Horizontal Progress Bar */}
        {slidesData.length > 1 && (
          <div className="mt-8 mx-auto transform flex gap-1">
            {slidesData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1 transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-black w-8' 
                    : 'bg-gray-300 w-6 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        )}
    </div>
  );
};

export default ImageSlideshow;
