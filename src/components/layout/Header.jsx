import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useTheme } from '../../hooks/useTheme';

const Header = () => {
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 0;
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={`${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} px-4 py-4 shadow-sm border transition-all duration-500 ease-in-out ${
      isScrolled 
        ? 'sticky mx-auto top-0 z-50 w-full rounded-none' 
        : 'w-11/12 mx-auto top-10 rounded-xl relative z-10'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Right side - Brand and Navigation */}
          <div className="flex items-center gap-4">
            {/* Brand Logo */}
            <div className="flex items-center gap-2">
              <img src="/logos/LogoTransparent.png" alt="logo" className="w-12 h-12 md:w-16 md:h-16" />
               <div className="text-right">
                 <h1 className={`text-lg md:text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>مای پراپ</h1>
                 <p className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-600'} hidden sm:block`}>معتبرترین سایت پراپ ایرانی</p>
               </div>
            </div>


            {/* Navigation Links - Desktop */}
            <nav className="hidden md:flex items-center gap-2">
              
              <div className={`flex items-center gap-0.5 ${isDark ? 'text-gray-300 hover:text-green-400' : 'text-gray-700 hover:text-green-600'} cursor-pointer`}>
                
                 <img src="/icons/Money.svg" alt="" />

                <span>پراپ تریدینگ</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                  
                <span className="bg-emerald-500 text-white px-4 py-2 rounded-sm text-sm font-medium transition-colors">
                  آپدیت شده
                </span>
              </div>


              <div className={`flex items-center gap-1 ${isDark ? 'text-gray-300 hover:text-green-400' : 'text-gray-700 hover:text-green-600'} cursor-pointer`}>
                
              <img src="/icons/Plan.svg" alt="" />

                <span>پلن های ما</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>

               <div className={`flex items-center space-x-1 space-x-reverse ${isDark ? 'text-gray-300 hover:text-green-400' : 'text-gray-700 hover:text-green-600'} cursor-pointer`}>
                 
                 <img src="/icons/Users.svg" alt="" />

                 <span>همکاری با ما</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              
               <div className={`flex items-center space-x-1 space-x-reverse ${isDark ? 'text-gray-300 hover:text-green-400' : 'text-gray-700 hover:text-green-600'} cursor-pointer`}>
                
               <img src="/icons/Info.svg" alt="" />
                
                 <span>درباره ما</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </nav>
          </div>

          {/* Left side - Action Buttons */}
          <div className="flex items-center space-x-2 space-x-reverse">
            {/* Mobile Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className={`md:hidden w-10 h-10 ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} hover:cursor-pointer rounded-full flex items-center justify-center transition-colors`}
            >
              {isDark ? (
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-4 space-x-reverse">
              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className={`w-10 h-10 ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} hover:cursor-pointer rounded-full flex items-center justify-center transition-colors`}
              >
                {isDark ? (
                  // Sun icon for light mode
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  // Moon icon for dark mode
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              {/* Contact Us */}
              <button className={`flex items-center space-x-2 space-x-reverse ${isDark ? 'bg-gray-800 border-gray-600 hover:bg-gray-700' : 'bg-white border-gray-300 hover:bg-gray-50'} px-4 py-2 rounded-sm border hover:cursor-pointer transition-colors`}>
                 <img src="/images/phone.png" alt="phone" className="w-4 h-4" />
                <span className={`${isDark ? 'text-gray-200' : 'text-gray-700'} font-medium`}>تماس با ما</span>
              </button>

              {/* Login/Register */}
              <Link to="/login" className={`flex items-center space-x-2 space-x-reverse ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-800 hover:bg-gray-900'} text-white px-4 py-2 rounded-sm hover:cursor-pointer transition-colors`}>
                 <img src="/icons/User-With-Star.svg" alt="user" className="w-4 h-4" />
                <span className="font-medium">ورود و ثبت نام</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-t transition-all duration-300 ease-in-out`}>
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              <div className={`flex items-center gap-2 p-3 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} cursor-pointer`}>
                <img src="/icons/Money.svg" alt="" className="w-5 h-5" />
                <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-medium`}>پراپ تریدینگ</span>
                <span className="bg-emerald-500 text-white px-2 py-1 rounded text-xs">آپدیت شده</span>
              </div>

              <div className={`flex items-center gap-2 p-3 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} cursor-pointer`}>
                <img src="/icons/Plan.svg" alt="" className="w-5 h-5" />
                <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-medium`}>پلن های ما</span>
              </div>

              <div className={`flex items-center gap-2 p-3 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} cursor-pointer`}>
                <img src="/icons/Users.svg" alt="" className="w-5 h-5" />
                <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-medium`}>همکاری با ما</span>
              </div>

              <div className={`flex items-center gap-2 p-3 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} cursor-pointer`}>
                <img src="/icons/Info.svg" alt="" className="w-5 h-5" />
                <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-medium`}>درباره ما</span>
              </div>
            </div>

            {/* Mobile Action Buttons */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
              <button className={`w-full flex items-center justify-center gap-2 p-3 rounded-lg ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}>
                <img src="/images/phone.png" alt="phone" className="w-4 h-4" />
                <span className={`${isDark ? 'text-gray-200' : 'text-gray-700'} font-medium`}>تماس با ما</span>
              </button>

              <Link 
                to="/login" 
                className={`w-full flex items-center justify-center gap-2 p-3 rounded-lg ${isDark ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-800 hover:bg-gray-900'} text-white transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <img src="/icons/User-With-Star.svg" alt="user" className="w-4 h-4" />
                <span className="font-medium">ورود و ثبت نام</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
