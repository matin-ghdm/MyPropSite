import React, { useState } from 'react';

const Footer = () => {
  const [isRiskWarningExpanded, setIsRiskWarningExpanded] = useState(true);
  const [isJurisdictionExpanded, setIsJurisdictionExpanded] = useState(false);

  return (
    <footer className="bg-white text-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 mb-12">
          {/* Logo Section */}
          <div className="flex items-center">
            <img src="/logos/LogoTransparent.png" alt="" className="w-12 h-12 lg:w-16 lg:h-16" />
            <div className="mr-3">
              <h3 className="text-xl lg:text-2xl font-bold text-black">مای پراپ</h3>
              <p className="text-xs text-gray-500 mt-1">معتبرترین سایت پراپ ایرانی</p>
            </div>
          </div>
          
          {/* Description Text */}
          <div className="flex-1 w-full lg:w-auto">
            <p className="text-black text-sm leading-relaxed">
            با زیرساختی سریع، پلتفرمی امن، و تحلیل‌هایی مبتنی بر داده‌های لحظه‌ای، ما به تو کمک می‌کنیم تا فرصت‌ها را زودتر ببینی، دقیق‌تر تحلیل کنی و هوشمندانه‌تر معامله کنی.کمک می‌کنیم تا فرصت‌ها را زودتر ببینی، دقیق‌تر تحلیل کنی و هوشمندانه‌تر معامله کنی.
            </p>
          </div>
        </div>

        {/* Mid-Page Content */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-8 lg:mb-12 border-y border-gray-300 py-6 lg:py-8 text-sm font-bold">
            <h4 className="text-center sm:text-right">دسترسی های سریع</h4>
            <h4 className="text-center sm:text-right">لینک های مفید</h4>
            <h4 className="text-center sm:text-right">برخی از آموزش ها</h4>
            <h4 className="text-center sm:text-right">دارای مجوز از رگولاتوری های معتبر</h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8 lg:mb-12">
            {/* Quick Access Column */}
            <div>
              <ul className="space-y-3">
                <li><a href="#" className="text-black hover:text-teal-600 transition-colors text-sm">صفحه اصلی</a></li>
                <li><a href="#" className="text-black hover:text-teal-600 transition-colors text-sm">پراپ تریدینگ</a></li>
                <li><a href="#" className="text-black hover:text-teal-600 transition-colors text-sm">پلن ها</a></li>
                <li><a href="#" className="text-black hover:text-teal-600 transition-colors text-sm">همکاری با ما</a></li>
                <li><a href="#" className="text-black hover:text-teal-600 transition-colors text-sm">بروکرها</a></li>
                <li><a href="#" className="text-black hover:text-teal-600 transition-colors text-sm">قوانین و مقررات</a></li>
              </ul>
            </div>

            {/* Useful Links Column */}
            <div>
              <ul className="space-y-3">
                <li><a href="#" className="text-black hover:text-teal-600 transition-colors text-sm">تماس با ما</a></li>
                <li><a href="#" className="text-black hover:text-teal-600 transition-colors text-sm">درباره ما</a></li>
                <li><a href="#" className="text-black hover:text-teal-600 transition-colors text-sm">قوانین و مقررات</a></li>
                <li><a href="#" className="text-black hover:text-teal-600 transition-colors text-sm">سوالات متداول</a></li>
              </ul>
            </div>

            {/* Tutorials Column */}
            <div>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2 space-x-reverse text-xs">
                  <a href="#" className="text-black hover:text-teal-600 transition-colors text-sm">
                    نحوه دریافت سرمایه از وب سایت مای پراپ به سرعت و با تمام جزئیات و راه حل
                  </a>
                </li>
                <li className="flex items-center space-x-2 space-x-reverse">
                  <a href="#" className="text-black hover:text-teal-600 transition-colors text-sm">
                    آموزش انجام چالش های پراپ تریدینگ
                  </a>
                </li>
                <li className="flex items-center space-x-2 space-x-reverse">
                  <a href="#" className="text-black hover:text-teal-600 transition-colors text-sm">
                    نحوه دریافت سرمایه از وب سایت مای پراپ به سرعت و با تمام جزئیات و راه حل
                  </a>
                </li>
                <li className="flex items-center space-x-2 space-x-reverse">
                  <a href="#" className="text-black hover:text-teal-600 transition-colors text-sm">
                    آموزش سریع درخواست همکاری
                  </a>
                </li>
              </ul>
            </div>

            {/* Regulatory Licenses Section */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex flex-wrap justify-center sm:justify-start gap-4 lg:gap-6">
                {/* FSA Logo */}
                <div className="flex items-center">
                 <img src="/icons/FSA.png" alt="FSA" className="w-12 h-12" />
                </div>
                
                {/* Financial Commission Logo */}
                <div className="flex items-center">
                  <img src="/icons/financial.png" alt="Financial Commission" className="w-12 h-12" />
                </div>
                
                {/* ASIC Logo */}
                <div className="flex items-center">
                  <img src="/icons/ASIC.png" alt="ASIC" className="w-12 h-12" />
                </div>
              </div>
            </div>

          </div>
        </div>

       

        {/* Footer Section */}
        <div className="border-t border-gray-300 pt-6 lg:pt-8">
          <div className="flex flex-col xl:flex-row justify-between items-start gap-8">
            {/* Contact Information */}
            <div className="w-full xl:w-1/2">
              <div className="space-y-4">
                {/* Phone Row */}
                <div className="flex items-center justify-between">
                  <span className="text-black text-sm font-bold">مرکز تماس مشتریان</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-black text-sm">۰۲۱-۹۱۰۱۴۰۴۹</span>
                    <img src="/icons/phone.svg" alt="" />
                  </div>
                </div>
                
                {/* Email Row */}
                <div className="flex items-center justify-between">
                  <span className="text-black text-sm">به صورت شبانه روزی پشتیبان شما هستیم</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-black text-sm">MyProp@gmail.com</span>
                    <img src="/icons/Email.svg" alt="" />
                  </div>
                </div>
                
                {/* Address Row */}
                <div className="flex items-center justify-between">
                  <span className="text-black text-xs">رضایت مشتری برای ما در اولویت است</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-black text-xs">میدان توحید ، خیابان امیرلو، خیابان طوسی، پلاک ۱۰۰، واحد ۳</span>
                    <img src="/icons/Location.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-wrap justify-center xl:justify-end gap-3 lg:gap-4 w-full xl:w-auto">
              <div className="text-center">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-teal-500 rounded-sm flex items-center justify-center p-2 mb-2">
                  <img src="/icons/white-telegram.svg" alt="تلگرام" className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <span className="text-black text-xs">تلگرام</span>
              </div>
              
              <div className="text-center">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-teal-500 rounded-sm flex items-center justify-center p-2 mb-2">
                  <img src="/icons/white-youtube.svg" alt="یوتیوب" className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <span className="text-black text-xs">یوتیوب</span>
              </div>
              
              <div className="text-center">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-teal-500 rounded-sm flex items-center justify-center p-2 mb-2">
                  <img src="/icons/white-whatsapp.svg" alt="واتس آپ" className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <span className="text-black text-xs">واتس آپ</span>
              </div>
              
              <div className="text-center">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-teal-500 rounded-sm flex items-center justify-center p-2 mb-2">
                  <img src="/icons/white-instagram.svg" alt="اینستاگرام" className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <span className="text-black text-xs">اینستاگرام</span>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Warning and Jurisdiction Disclaimer Section */}
        <div className="mt-12 space-y-4 text-left" dir="ltr">
          {/* Risk Warning Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4 hover:cursor-pointer" 
                onClick={() => setIsRiskWarningExpanded(!isRiskWarningExpanded)}>
              <div className="flex items-center space-x-3 space-x-reverse">
                <img src="/icons/Warning.png" alt="" />
                <h3 className="text-black">Risk Warning</h3>
              </div>
              <div 
                className="w-6 h-6 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                <svg className={`w-3 h-3 text-gray-600 transition-transform ${isRiskWarningExpanded ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            {isRiskWarningExpanded && (
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
              <p>
                Trading financial instruments, including but not limited to forex, commodities, indices, and cryptocurrencies, involves a high level of risk and may not be suitable for all investors.
              </p>
              <p>
                Leveraged trading can result in significant gains as well as substantial losses. You should carefully consider your investment objectives, level of experience, and risk appetite before engaging in any financial activity.
              </p>
              <p>
                Past performance is not indicative of future results.
              </p>
              <p>
                It is possible to lose all or more than your initial investment.
              </p>
              <p>
                You should not invest money that you cannot afford to lose.
              </p>
              <p>
                Myprop Ltd does not provide any personalized investment advice or guarantees of profit.
              </p>
              <p>
                Please ensure that you fully understand the risks involved and seek independent financial advice if necessary.
              </p>
              <p>
                Trading with Myprop Ltd is subject to local regulations, and services may not be available in certain jurisdictions.
              </p>
              </div>
            )}
          </div>

          {/* Jurisdiction Disclaimer Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between hover:cursor-pointer" 
                onClick={() => setIsJurisdictionExpanded(!isJurisdictionExpanded)}>
              <div className="flex items-center space-x-3 space-x-reverse">
                <img src="/icons/Jurisdiction.png" alt="" />
                <h3 className="pt-2 pl-2 text-black">Jurisdiction Disclaimer</h3>
              </div>
              <div 
                className="w-6 h-6 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                <svg className={`w-3 h-3 text-gray-600 transition-transform ${isJurisdictionExpanded ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            {isJurisdictionExpanded && (
              <div className="mt-4 space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  Jurisdiction disclaimer content will be displayed here when expanded.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            
            <div className="flex items-center gap-2">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-8 h-8 bg-teal-500 rounded flex items-center justify-center hover:bg-teal-600 transition-colors"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <span className="text-sm text-gray-600">تمامی حقوق برای این وب سایت محفوظ است</span>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-600">
              <span>طراحی و توسعه توسط مای پراپ</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
