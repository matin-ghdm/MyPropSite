import SimilarArticlesCard from '../cards/SimilarArticlesCard';


export default function SimilarArticles() {
  return (
    <div className="w-full my-6" dir="rtl">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 rounded-lg bg-teal-500"></div>
          <h2 className="text-2xl font-bold text-gray-900">مقالات مشابه</h2>
        </div>
      <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-green">
        <div className="flex-shrink-0">
          <SimilarArticlesCard />
        </div>
        <div className="flex-shrink-0">
          <SimilarArticlesCard />
        </div>
        <div className="flex-shrink-0">
          <SimilarArticlesCard />
        </div>
        <div className="flex-shrink-0">
          <SimilarArticlesCard />
        </div>
        <div className="flex-shrink-0">
          <SimilarArticlesCard />
        </div>
      </div>
    </div>
  );
}