import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../forms/LoginForm';
import ImageSlideshow from '../ui/ImageSlideshow';
import { slideshowData } from '../../data/slideshowData';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    password: '',
    rememberMe: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Validate form data
    if (formData.firstName && formData.lastName && formData.mobile && formData.password) {
      // Navigate to verification page with phone number
      navigate('/verification', { 
        state: { 
          phoneNumber: formData.mobile,
          userData: formData 
        } 
      });
    } else {
      alert('لطفاً تمام فیلدها را پر کنید');
    }
  };

  const handleNavigateToVerification = () => {
    navigate('/verification', { 
      state: { 
        phoneNumber: formData.mobile,
        userData: formData 
      } 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      
      <main>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-screen">
          {/* Right Section - Illustration */}
          <ImageSlideshow
          slidesData={slideshowData}
          autoPlay={true}
          interval={6000}
        />
          
          {/* Left Section - Registration Form */}
          <LoginForm 
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            onNavigateToVerification={handleNavigateToVerification}
          />
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
 