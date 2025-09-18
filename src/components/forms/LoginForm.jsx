import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CountryCodeSelector from './CountryCodeSelector';

const LoginForm = ({ formData, handleInputChange, handleSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'نام الزامی است';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'نام خانوادگی الزامی است';
    }
    
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'شماره موبایل الزامی است';
    } else if (!/^9\d{9}$/.test(formData.mobile.replace(/\D/g, ''))) {
      newErrors.mobile = 'شماره موبایل معتبر نیست';
    }
    
    if (!formData.password.trim()) {
      newErrors.password = 'رمز عبور الزامی است';
    } else if (formData.password.length < 6) {
      newErrors.password = 'رمز عبور باید حداقل 6 کاراکتر باشد';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleSubmit(e);
    }
  };

  const handleInputChangeWithValidation = (e) => {
    const { name, value } = e.target;
    handleInputChange(e);
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  return (
    <div className="flex flex-col justify-center lg:w-2/3 py-12 px-8 mx-auto bg-contain bg-no-repeat bg-top" style={{backgroundImage: 'url(/images/FAQback.png)'}}>
      {/* Back Button */}
      <div className="flex items-center mb-6">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center font-medium mr-auto text-gray-600 hover:text-gray-800 hover:cursor-pointer"
        >
          صفحه اصلی
           <div className="p-1  w-8 h-8 mx-4 rounded-lg border-[2px] border-gray-300">
             <img src="/icons/Arrow Left.svg" alt="Back" className="w-full h-full" style={{filter: 'brightness(0)'}} />
           </div>
        </button>
      </div>

      {/* Logo */}
      <div className="flex justify-center mb-8">
        <img src="/logos/Logo.png" alt="logo" className="" />
      </div>

      {/* Welcome Message */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">به مای پراپ خوش آمدید.</h1>
        <p className="text-gray-600">اطلاعات خود را جهت ثبت نام وارد نمایید.</p>
      </div>

      {/* Registration Form */}
      <form onSubmit={handleFormSubmit} className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">نام</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChangeWithValidation}
              placeholder="نام خود را وارد نمایید"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent ${
                errors.firstName ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">نام خانوادگی</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChangeWithValidation}
              placeholder="نام خانوادگی خود را وارد نمایید"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent ${
                errors.lastName ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">شماره موبایل</label>
          <CountryCodeSelector
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChangeWithValidation}
            error={errors.mobile}
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">رمز عبور</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChangeWithValidation}
              placeholder="رمز عبور را وارد نمایید"
              className={`w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? (
                // Eye with slash (hide password)
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                </svg>
              ) : (
                // Eye (show password)
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password}</p>
          )}
        </div>

        {/* Remember Me */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleInputChange}
            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
          />
          <label className="mr-2 block text-sm text-gray-700">مرا به خاطر بسپار</label>
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-4 px-6 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center justify-center"
        >
          ثبت نام
          <img src="/icons/Arrow Left.svg" alt="Back" className="w-5 h-5 mr-2 rotate-[135deg]" />
        </button>

        {/* Separator */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">یا</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Google Login */}
        <button
          type="button"
          className="w-full bg-gray-200 text-gray-700 py-4 px-6 rounded-lg font-medium hover:bg-gray-300 transition-colors flex items-center justify-center"
        >
          ورود و ثبت نام با حساب گوگل
          <img src="/images/GoogleLogo.png" alt="Google" className="w-5 h-5 mr-2" />
        </button>

        {/* Login Link */}
        <div className="text-center">
          <a href="#" className="text-teal-600 hover:text-teal-700 text-sm">
            حساب کاربری دارید؟ وارد شوید
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
