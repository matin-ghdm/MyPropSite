import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import VerificationForm from '../forms/VerificationForm';
import ImageSlideshow from '../ui/ImageSlideshow';
import { slideshowData } from '../../data/slideshowData';

const VerificationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get phone number from navigation state
  const phoneNumber = location.state?.phoneNumber || '09123456789';
  const userData = location.state?.userData;

  const handleVerify = (code) => {
    console.log('Verification code:', code);
    console.log('User data:', userData);
    
    // Here you would typically send the code to your backend for verification
    // For now, we'll just show a success message and redirect
    alert('کد تایید با موفقیت تایید شد!');
    navigate('/'); // Redirect to home page after successful verification
  };

  const handleResend = async () => {
    console.log('Resending code to:', phoneNumber);
    // Here you would typically call your backend to resend the code
    alert('کد تایید مجدداً ارسال شد');
  };

  const handleBack = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      
      <main>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-screen">
        <ImageSlideshow
          slidesData={slideshowData}
          autoPlay={true}
          interval={6000}
        />
        
      <VerificationForm 
        phoneNumber={phoneNumber}
        onVerify={handleVerify}
        onResend={handleResend}
        onBack={handleBack}
      />
      </div>
    </main>
  </div>
  );
};

export default VerificationPage;
