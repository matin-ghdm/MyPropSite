import React, { useState } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Breadcrumb from '../ui/Breadcrumb';
import FAQHeader from '../widgets/FAQHeader';
import FAQItem from '../widgets/FAQItem';

const FAQPage = () => {
  const [openItems, setOpenItems] = useState({});

  const adsData = [
    {
      id: 1,
      image: '/images/Ads.png',
      link: 'https://www.google.com'
    }
  ];

  const faqData = [
    {
      id: 1,
      category: 'عمومی',
      question: 'چگونه می‌توانم در سایت ثبت نام کنم؟',
      answer: 'برای ثبت نام در سایت، روی دکمه "ورود و ثبت نام" در بالای صفحه کلیک کنید و اطلاعات مورد نیاز را وارد نمایید. پس از تکمیل فرآیند ثبت نام، می‌توانید از تمام امکانات سایت استفاده کنید.'
    },
    {
      id: 2,
      category: 'عمومی',
      question: 'آیا استفاده از سایت رایگان است؟',
      answer: 'بله، استفاده از بخش‌های اصلی سایت کاملاً رایگان است. شما می‌توانید از مقالات، آموزش‌ها و ابزارهای پایه بدون هیچ هزینه‌ای استفاده کنید. برخی از ویژگی‌های پیشرفته ممکن است نیاز به اشتراک داشته باشند.'
    },
    {
      id: 3,
      category: 'فارکس',
      question: 'آیا آموزش‌های فارکس برای مبتدیان مناسب است؟',
      answer: 'بله، تمام آموزش‌های فارکس ما از سطح مبتدی شروع می‌شود و به تدریج به سطوح پیشرفته می‌رسد. ما مفاهیم پایه را به زبان ساده توضیح می‌دهیم و مثال‌های عملی ارائه می‌کنیم.'
    },
    {
      id: 4,
      category: 'فارکس',
      question: 'چگونه می‌توانم در فارکس شروع به معامله کنم؟',
      answer: 'برای شروع معامله در فارکس، ابتدا باید با مفاهیم پایه آشنا شوید، یک بروکر معتبر انتخاب کنید، حساب معاملاتی باز کنید و با مبالغ کم شروع کنید. توصیه می‌کنیم ابتدا از حساب دمو استفاده کنید.'
    },
    {
      id: 5,
      category: 'حساب کاربری',
      question: 'چگونه رمز عبور خود را تغییر دهم؟',
      answer: 'برای تغییر رمز عبور، وارد حساب کاربری خود شوید، به بخش "تنظیمات حساب" بروید و گزینه "تغییر رمز عبور" را انتخاب کنید. رمز عبور جدید باید حداقل 8 کاراکتر و شامل حروف و اعداد باشد.'
    },
    {
      id: 6,
      category: 'حساب کاربری',
      question: 'آیا می‌توانم حساب کاربری خود را حذف کنم؟',
      answer: 'بله، می‌توانید حساب کاربری خود را حذف کنید. برای این کار، به بخش "تنظیمات حساب" بروید و گزینه "حذف حساب" را انتخاب کنید. توجه داشته باشید که این عمل غیرقابل بازگشت است.'
    },
    {
      id: 7,
      category: 'فنی',
      question: 'سایت در مرورگر من به درستی نمایش داده نمی‌شود، چه کنم؟',
      answer: 'ابتدا مرورگر خود را به‌روزرسانی کنید. اگر مشکل ادامه داشت، کش مرورگر را پاک کنید و دوباره امتحان کنید. همچنین مطمئن شوید که JavaScript فعال است. اگر مشکل همچنان وجود داشت، با پشتیبانی تماس بگیرید.'
    },
    {
      id: 8,
      category: 'فنی',
      question: 'آیا سایت در موبایل هم کار می‌کند؟',
      answer: 'بله، سایت ما کاملاً responsive است و در تمام دستگاه‌ها از جمله موبایل، تبلت و دسکتاپ به درستی کار می‌کند. نسخه موبایل تمام امکانات نسخه دسکتاپ را دارد.'
    }
  ];

  const categories = [
    { name: 'همه', icon: '/icons/Money.svg' },
    { name: 'عمومی', icon: '/icons/Money.svg' },
    { name: 'فارکس', icon: '/icons/Money.svg' },
    { name: 'حساب کاربری', icon: '/icons/Money.svg' },
    { name: 'فنی', icon: '/icons/Money.svg' }
  ];
  const [selectedCategory, setSelectedCategory] = useState('همه');

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const breadcrumbItems = [
    { label: 'مای پراپ', path: '/' },
    { label: 'سوالات متداول', path: null }
  ];

  const filteredFAQs = selectedCategory === 'همه' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      
      {adsData.map((ad) => (
        <a key={ad.id} href={ad.link} target="_blank" rel="noopener noreferrer">
          <img src={ad.image} alt="Ads" className="w-full" />
        </a>
      ))}
      
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">

      <Breadcrumb items={breadcrumbItems} />

      <FAQHeader />

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center bg-white rounded-lg border border-gray-300 w-5/6 mx-auto -mt-8 mb-12 p-2 relative z-10">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className="px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-3"
            >
              <div className={`p-4 rounded-full ${
                selectedCategory === category.name
                  ? 'bg-gray-800 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-200'
              }`}>
                <img 
                  src={category.icon}
                  alt={category.name}
                  className="w-5 h-5 transition-opacity"
                  style={{
                    filter: selectedCategory === category.name ? 'brightness(0) invert(1)' : 'none'
                  }}
                />
              </div>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openItems[item.id] || false}
              onToggle={() => toggleItem(item.id)}
            />
          ))}
        </div>
        
      </main>

      <Footer />
    </div>
  );
};

export default FAQPage;

