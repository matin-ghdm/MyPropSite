import React from 'react';
import Header from '../layout/Header';
import Breadcrumb from '../ui/Breadcrumb';
import Footer from '../layout/Footer';
import ArticleContent from '../widgets/ArticleContent';
import ArticleComments from '../widgets/ArticleComments';
import SimilarArticles from '../widgets/SimilarArticles';

const ArticlePage = () => {

  const breadcrumbItems = [
    { label: 'مای پراپ', path: '/' },
    { label: 'مقالات', path: '/articles' },
    { label: 'آموزش فارکس', path: '/forex-education' },
    { label: 'چگونه در فارکس ضرر نکنیم: راهکارهای مؤثر برای معامله گران موفق', path: null }
  ];

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header />
      
      {/* Breadcrumb Navigator */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Article Content */}
      <main className="max-w-7xl mx-auto">
          <ArticleContent />
          <ArticleComments />
          <SimilarArticles />
      </main>

      <Footer />
    </div>
  );
};

export default ArticlePage;
