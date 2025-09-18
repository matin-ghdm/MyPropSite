import React from 'react';
import ExpandableSummary from './ExpandableSummary';
import TagBadge from '../ui/TagBadge';
import SimilarArticlesCard from '../cards/SimilarArticlesCard';

export default function ArticleDetails() {

  return (
    <article className="max-w-4xl mx-auto px-4">
      {/* Header Section */}
      <div className="mb-8">
        <h4>راهکارهای مؤثر برای معامله‌گران موفق</h4>
        <h1 className="text-2xl lg:text-2xl font-bold text-gray-900 mt-4 mb-8 leading-tight">
          چگونه در فارکس ضرر نکنیم راهکارهای مؤثر برای معامله گران موفق
        </h1>
        <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
          <span className="flex items-center gap-1">
          <img src="/icons/Clock.svg" className="w-5 h-5" alt="" />
            ۲۵ دقیقه
          </span>
          <span className="flex items-center gap-1">
            <img src="/icons/Eye.svg" className="w-5 h-5" alt="" />
            ۲۴۴ بازدید
          </span>
        </div>
      </div>

      {/* Main Image Section */}
      <div className="relative mb-8">
        <div className="relative">
          <img 
            src="/images/article-image.png" 
            alt="Trading App Interface" 
            className="w-full rounded-lg shadow-lg"
          />
          {/* Overlay Button */}
          <div className="absolute bottom-8 right-8">
            <TagBadge text="آموزش فارکس" color="bg-green-600" />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed mb-6">
        با زیرساختی سریع، پلتفرمی امن، و تحلیل‌هایی مبتنی بر داده‌های لحظه‌ای، ما به تو کمک می‌کنیم تا فرصت‌ها را زودتر ببینی، دقیق‌تر تحلیل کنی و هوشمندانه‌تر معامله کنی.
        </p>

        {/* Summary Section */}
        <ExpandableSummary 
          title="خلاصه آنچه در مقاله میخوانیم"
          items={[
            "چگونه در فارکس ضرر نکنیم: راهکارهای مؤثر برای معامله گران موفق",
            "چگونه در فارکس ضرر نکنیم: راهکارهای مؤثر برای معامله گران موفق",
            "چگونه در فارکس ضرر نکنیم: راهکارهای مؤثر برای معامله گران موفق",
            "چگونه در فارکس ضرر نکنیم: راهکارهای مؤثر برای معامله گران موفق",
            "چگونه در فارکس ضرر نکنیم: راهکارهای مؤثر برای معامله گران موفق"
          ]}
        />

        <p className="text-gray-700 leading-relaxed mb-6">
        با زیرساختی سریع، پلتفرمی امن، و تحلیل‌هایی مبتنی بر داده‌های لحظه‌ای، ما به تو کمک می‌کنیم تا فرصت‌ها را زودتر ببینی، دقیق‌تر تحلیل کنی و هوشمندانه‌تر معامله کنی.با زیرساختی سریع، پلتفرمی امن، و تحلیل‌هایی مبتنی بر داده‌های لحظه‌ای، ما به تو کمک می‌کنیم تا فرصت‌ها را زودتر ببینی، دقیق‌تر تحلیل کنی و هوشمندانه‌تر معامله کنی.با زیرساختی سریع، پلتفرمی امن، و تحلیل‌هایی مبتنی بر داده‌های لحظه‌ای، ما به تو کمک می‌کنیم تا فرصت‌ها را زودتر ببینی، دقیق‌تر تحلیل کنی و هوشمندانه‌تر معامله کنی.با زیرساختی سریع، پلتفرمی امن، و تحلیل‌هایی مبتنی بر داده‌های لحظه‌ای، ما به تو کمک می‌کنیم تا فرصت‌ها را زودتر ببینی، دقیق‌تر تحلیل کنی و هوشمندانه‌تر معامله کنی.
        </p>

        {/* Quote Section */}
        <blockquote className="border border-gray-300 my-6 rounded-sm p-8">
          <span className="text-gray-700 font-semibold rounded-full bg-gray-200 px-3 py-1">،،</span>
          <p className="text-gray-700 font-semibold my-4">
            علیرضا عسکری در گفت و گو با خبرنگار مهر با بیان اینکه خبر ریزش سقف آرامگاه اردشیر دوم در تخت جمشید صحت ندارد، گفت: بررسی‌های کارشناسان این مجموعه از این آرامگاه عوارضی که بر سقف و دیواره این بنا مشاهده می‌شود.
          </p>
          <div className="flex justify-end">
            <span className="text-gray-700 font-semibold rounded-full bg-gray-200 px-3 py-1 transform rotate-180">،،</span>
          </div>
        </blockquote>

        <p className="text-gray-700 leading-relaxed">
        با زیرساختی سریع، پلتفرمی امن، و تحلیل‌هایی مبتنی بر داده‌های لحظه‌ای، ما به تو کمک می‌کنیم تا فرصت‌ها را زودتر ببینی، دقیق‌تر تحلیل کنی و هوشمندانه‌تر معامله کنی.با زیرساختی سریع، پلتفرمی امن، و تحلیل‌هایی مبتنی بر داده‌های لحظه‌ای، ما به تو کمک می‌کنیم تا فرصت‌ها را زودتر ببینی، دقیق‌تر تحلیل کنی و هوشمندانه‌تر معامله کنی.با زیرساختی سریع، پلتفرمی امن، و تحلیل‌هایی مبتنی بر داده‌های لحظه‌ای، ما به تو کمک می‌کنیم تا فرصت‌ها را زودتر ببینی، دقیق‌تر تحلیل کنی و هوشمندانه‌تر معامله کنی.با زیرساختی سریع، پلتفرمی امن، و تحلیل‌هایی مبتنی بر داده‌های لحظه‌ای، ما به تو کمک می‌کنیم تا فرصت‌ها را زودتر ببینی، دقیق‌تر تحلیل کنی و هوشمندانه‌تر معامله کنی.
        </p>
      </div>

       <SimilarArticlesCard />
    </article>
  );
}