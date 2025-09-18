import React, { useState, useEffect } from 'react';

const VerificationForm = ({ phoneNumber, onVerify, onResend, onBack }) => {
  const [code, setCode] = useState(['', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
  const [isResending, setIsResending] = useState(false);

  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle code input
  const handleCodeChange = (index, value) => {
    // Handle paste event (4 digits at once)
    if (value.length === 4 && /^\d{4}$/.test(value)) {
      const digits = value.split('');
      setCode(digits);
      // Focus the last input
      setTimeout(() => {
        const lastInput = document.getElementById(`code-3`);
        if (lastInput) lastInput.focus();
      }, 0);
      return;
    }
    
    // Only allow single digit
    if (value.length > 1) return;
    
    // Only allow numbers
    if (value && !/^\d$/.test(value)) return;
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 3) {
      setTimeout(() => {
        const nextInput = document.getElementById(`code-${index + 1}`);
        if (nextInput) nextInput.focus();
      }, 0);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace') {
      if (code[index]) {
        // If current field has value, clear it
        const newCode = [...code];
        newCode[index] = '';
        setCode(newCode);
      } else if (index > 0) {
        // If current field is empty, go to previous field
        const prevInput = document.getElementById(`code-${index - 1}`);
        if (prevInput) prevInput.focus();
      }
    }
    
    // Handle arrow keys
    if (e.key === 'ArrowLeft' && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
    
    if (e.key === 'ArrowRight' && index < 3) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
    
    // Handle Enter key
    if (e.key === 'Enter') {
      e.preventDefault();
      const fullCode = code.join('');
      if (fullCode.length === 4) {
        onVerify(fullCode);
      }
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const fullCode = code.join('');
    if (fullCode.length === 4) {
      onVerify(fullCode);
    }
  };

  // Handle resend
  const handleResend = async () => {
    if (timeLeft > 0) return;
    
    setIsResending(true);
    try {
      await onResend();
      setTimeLeft(120); // Reset timer
    } catch (error) {
      console.error('Resend failed:', error);
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="flex flex-col justify-center lg:w-2/3 py-12 px-8 mx-auto">
      {/* Back Button */}
      <div className="flex items-center mb-6">
        <button 
          onClick={onBack}
          className="flex items-center font-medium mr-auto text-gray-600 hover:text-gray-800 hover:cursor-pointer"
        >
          تغییر شماره موبایل
          <div className="p-1 w-8 h-8 mx-4 rounded-lg border-[2px] border-gray-300">
            <img src="/icons/Arrow Left.svg" alt="Back" className="w-full h-full" style={{filter: 'brightness(0)'}} />
          </div>
        </button>
      </div>

      {/* Logo */}
      <div className="flex justify-center mb-4">
        <img src="/logos/Logo.png" alt="Logo" />
      </div>

      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">کد تایید موبایل</h1>
        <p className="text-gray-600">
          کد تایید ارسال شده به شماره موبایل{' '}
          <span className="font-semibold text-gray-800">{phoneNumber}</span>{' '}
          را وارد نمایید.
        </p>
      </div>

      {/* Verification Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Code Input Fields */}
        <div className="flex justify-center space-x-4 mb-8" dir="ltr">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`code-${index}`}
              type="text"
              inputMode="numeric"
              pattern="[0-9]"
              maxLength="1"
              value={digit}
              onChange={(e) => handleCodeChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={(e) => {
                e.preventDefault();
                const pastedData = e.clipboardData.getData('text');
                if (/^\d{4}$/.test(pastedData)) {
                  const digits = pastedData.split('');
                  setCode(digits);
                  setTimeout(() => {
                    const lastInput = document.getElementById(`code-3`);
                    if (lastInput) lastInput.focus();
                  }, 0);
                }
              }}
              className="w-16 h-16 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
              placeholder="-"
            />
          ))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={code.join('').length !== 4}
          className="w-full bg-gray-800 text-white py-4 px-6 rounded-lg font-medium hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
        >
          تایید کد
          <img src="/icons/Arrow Left.svg" alt="Submit" className="w-5 h-5 mr-2 rotate-[135deg]" />
        </button>

        {/* Resend Timer */}
        <div className="text-center">
          {timeLeft > 0 ? (
            <p className="text-gray-600">
              تا ارسال مجدد کد{' '}
              <span className="text-teal-600 font-semibold">{formatTime(timeLeft)}</span>
            </p>
          ) : (
            <button
              type="button"
              onClick={handleResend}
              disabled={isResending}
              className="text-teal-600 hover:text-teal-700 font-medium disabled:opacity-50"
            >
              {isResending ? 'در حال ارسال...' : 'ارسال مجدد کد'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default VerificationForm;
