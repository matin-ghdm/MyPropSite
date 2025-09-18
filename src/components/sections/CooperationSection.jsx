

export default function CooperationSection() {
  return (
    <div style={{ backgroundImage: `url('/images/Subtract.png')` }} className="pb-8 bg-contain bg-no-repeat bg-bottom mb-12 flex flex-col-reverse lg:flex-row items-center justify-between lg:max-w-7xl mx-4 lg:mx-auto px-4 sm:px-6 lg:px-8 bg-black rounded-lg">
      <div className="text-white">
        <h4 className="lg:text-2xl text-xl mt-4 font-bold mb-2">فرصت همکاری و سود دو طرفه</h4>
        <p className="text-gray-300 text-sm lg:text-base mb-4">با زیر ساختی سریع ، پلتفرمی امن و تحلیل هایی مبتنی بر داده های لحظه ای</p>
         <button className="mt-8 bg-gray-800 hover:cursor-pointer hover:bg-gray-700 text-xs lg:text-base text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors duration-300">
           ثبت درخواست همکاری
           <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M20.1863 12H4.18628M4.18628 12L10.1863 6M4.18628 12L10.1863 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
         </button>
      </div>
      <img src="/images/hamkari.png" alt="" />
    </div>
  );
}