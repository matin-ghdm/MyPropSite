 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import EditorsChoiceSection from './components/sections/EditorsChoiceSection';
import ArticlesSection from './components/sections/ArticlesSection';
import EducationalArticlesSection from './components/sections/EducationalArticlesSection';
import BlogsSection from './components/sections/BlogsSection';
import DigitalCurrenciesSection from './components/sections/DigitalCurrenciesSection';
import ForexMarketSection from './components/sections/ForexMarketSection';
import CooperationSection from './components/sections/CooperationSection';
import LastVideosSection from './components/sections/LastVideosSection';
import Footer from './components/layout/Footer';
import ArticlePage from './components/pages/ArticlePage';
import FAQPage from './components/pages/FAQPage';
import LoginPage from './components/pages/LoginPage';
import VerificationPage from './components/pages/VerificationPage';
import NotFoundPage from './components/pages/NotFoundPage';
import AnimatedSection from './components/ui/AnimatedSection';

function HomePage() {
  return (
    <>
      <Header />
      <main className="relative z-0">
        <HeroSection />
        <ArticlesSection />
        
        <AnimatedSection delay={400}>
          <EditorsChoiceSection />
        </AnimatedSection>
        <AnimatedSection delay={400}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-7xl">
            <ForexMarketSection />
            <DigitalCurrenciesSection />
          </div>
        </AnimatedSection>
        <AnimatedSection delay={400}>
          <EducationalArticlesSection />
        </AnimatedSection>
        <AnimatedSection delay={400}>
          <CooperationSection />
        </AnimatedSection>
        <AnimatedSection delay={400}>
          <BlogsSection />
        </AnimatedSection>
        <AnimatedSection delay={400}>
          <LastVideosSection />
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50" dir="rtl">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verification" element={<VerificationPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
 