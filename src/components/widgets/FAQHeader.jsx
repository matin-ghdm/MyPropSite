export default function FAQHeader() {
  return (
    <div className="relative w-full h-62 bg-black bg-cover bg-center rounded-2xl bg-no-repeat overflow-hidden" style={{backgroundImage: 'url(/images/FAQback.png)'}}>
        <div className="absolute bottom-0 left-0 translate-x-[-30%] translate-y-[30%] bg-[#19CCA7] w-[350px] sm:w-[500px] h-[30px] sm:h-[130px] rotate-[30deg] blur-[30px] animate-pulse"></div>
        <img src="/images/Question.png" alt="FAQlogo" className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

        <img src="/images/WhiteStar.png" alt="" className="absolute top-1/2 left-2/5 rotate-180 transform -translate-x-1/2 -translate-y-1/2 animate-bounce" style={{animationDuration: '3s'}} />
        <img src="/images/WhiteStar.png" alt="" className="absolute top-1/3 left-3/5 transform -translate-x-1/2 -translate-y-1/2 animate-bounce" style={{animationDuration: '3s'}} />

        <h2 className="text-white text-center absolute w-full h-4/5 flex items-center justify-center lg:text-xl">ترید مستقیم روی حساب ریل یکی از بهترین راه ها برای کسب درآمد از بازارهای مالی است. </h2>
    </div>
  );
}