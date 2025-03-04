
import { useEffect, useRef } from 'react';
import { Download } from 'lucide-react';

const Hero = () => {
  const phoneRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (phoneRef.current) observer.observe(phoneRef.current);
    if (headingRef.current) observer.observe(headingRef.current);
    if (subheadingRef.current) observer.observe(subheadingRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      if (phoneRef.current) observer.unobserve(phoneRef.current);
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (subheadingRef.current) observer.unobserve(subheadingRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden min-h-screen pt-20">
      {/* Background Design Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-blue-400 rounded-full opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-white mb-12 lg:mb-0">
          <h1 
            ref={headingRef}
            className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight slide-up leading-tight"
          >
            SAVE MONEY<br />
            ON YOUR<br />
            SHOPPING
          </h1>
          
          <p 
            ref={subheadingRef}
            className="text-green-300 text-2xl md:text-3xl mb-10 max-w-lg slide-up font-semibold"
            style={{ animationDelay: '0.2s' }}
          >
            SHOP SMARTER, NOT HARDER
          </p>
          
          <button 
            ref={buttonRef}
            className="bg-white text-blue-700 font-medium py-4 px-8 rounded-full flex items-center hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg slide-up"
            style={{ animationDelay: '0.4s' }}
          >
            <span>Download Now</span>
            <Download className="ml-2" size={20} />
          </button>
        </div>
        
        {/* Right Content - Phone */}
        <div 
          ref={phoneRef}
          className="w-full lg:w-1/2 flex justify-center fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          <div className="relative w-80 md:w-96">
            <div className="absolute inset-0 bg-black/20 rounded-[40px] blur-xl transform scale-105"></div>
            <div className="relative bg-white rounded-[40px] overflow-hidden shadow-2xl border-8 border-gray-800">
              <div className="relative w-full">
                <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 rounded-t-3xl flex items-center justify-center">
                  <div className="w-20 h-4 bg-black rounded-b-xl"></div>
                </div>
                <img 
                  src="/lovable-uploads/790d9d42-8391-414f-93a4-146410fbd1f2.png" 
                  alt="Cart n Card App" 
                  className="w-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvcHBpbmclMjBhcHB8ZW58MHx8MHx8fDA%3D";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-40 right-1/4 animate-float hidden lg:block">
        <div className="bg-white/10 backdrop-blur-lg p-3 rounded-xl shadow-lg">
          <div className="flex items-center gap-3">
            <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">$</div>
            <div className="text-white">
              <div className="text-xs font-medium opacity-80">Saved</div>
              <div className="font-bold">$42.99</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-32 left-1/4 animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
        <div className="bg-white/10 backdrop-blur-lg p-3 rounded-xl shadow-lg">
          <div className="flex items-center gap-3">
            <div className="bg-orange-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">%</div>
            <div className="text-white">
              <div className="text-xs font-medium opacity-80">Discount</div>
              <div className="font-bold">25% OFF</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
