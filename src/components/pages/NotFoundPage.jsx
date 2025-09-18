import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />
      
      <main className="flex items-center justify-center min-h-[80vh] px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-teal-500 mb-4">404</h1>
            <div className="w-24 h-1 bg-teal-500 rounded-full mx-auto"></div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              صفحه مورد نظر یافت نشد
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا ممکن است حذف شده باشد.
              <br />
              لطفاً آدرس را بررسی کنید یا از منوی اصلی استفاده کنید.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleGoHome}
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              بازگشت به صفحه اصلی
            </button>
            
            <button
              onClick={handleGoBack}
              className="border border-teal-500 text-teal-500 hover:bg-teal-50 px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              بازگشت به صفحه قبل
            </button>
          </div>


          {/* Popular Links */}
          <div className="mt-8">
            <div className="flex flex-wrap gap-2 justify-center">
              <button 
                onClick={() => navigate('/')}
                className="px-3 py-1 bg-gray-100 hover:bg-teal-100 text-gray-600 hover:text-teal-600 rounded-full text-sm transition-colors"
              >
                صفحه اصلی
              </button>
              <button 
                onClick={() => navigate('/faq')}
                className="px-3 py-1 bg-gray-100 hover:bg-teal-100 text-gray-600 hover:text-teal-600 rounded-full text-sm transition-colors"
              >
                سوالات متداول
              </button>
              <button 
                onClick={() => navigate('/article')}
                className="px-3 py-1 bg-gray-100 hover:bg-teal-100 text-gray-600 hover:text-teal-600 rounded-full text-sm transition-colors"
              >
                مقالات
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFoundPage;
