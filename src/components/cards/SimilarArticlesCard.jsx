import TagBadge from '../ui/TagBadge';


export default function SimilarArticlesCard() {
  return (
    <div className="my-6 flex flex-col lg:flex-row gap-3 justify-between">

      <div className="relative">
        <img className="w-full" src="/images/article-image.png" alt="Similar Article" />
        <div className="absolute bottom-4 right-2">
          <TagBadge text="آموزش فارکس" color="bg-[#19CCA7]" />
        </div>
      </div>

      <div className="border border-gray-300 rounded-sm p-2 lg:w-2/3">
        
        <div className="flex items-center h-1/3 gap-2">
            <img className="rounded-full w-8 h-8" src="/images/article-image.png" alt="Similar Article" />
            <p className="text-sm text-gray-500">نوشته شده توسط آرش موسوی</p>
        </div>

        <h2 className="text-lg font-bold h-1/3 text-gray-900 leading-relaxed line-clamp-2">
            چگونه در فارکس ضرر نکنیم: راهکارهای مؤثر برای معامله گران موفق
        </h2>

        <div className="flex items-center h-1/3 gap-2">
            
            <div className="flex items-center space-x-1 space-x-reverse bg-gray-200 p-2 rounded-sm">
                <img src="/icons/Clock.svg" className="w-5 h-5" alt="" />
               
                <span className="text-[10px]">25 دقیقه</span>
            </div>
            
            <div className="flex items-center space-x-1 space-x-reverse bg-gray-200 p-2 rounded-sm">
            <img src="/icons/Calendar.svg" className="w-4 h-4" style={{filter: 'brightness(0)'}} alt="" />
                <span className="text-[10px]">5 روز پیش</span>
            </div>

        </div>
      </div>
    </div>
  );
}