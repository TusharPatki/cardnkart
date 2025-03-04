
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
    <section className="relative bg-cardnbg-blue overflow-hidden min-h-screen pt-20">
      {/* Background Design Elements */}
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] opacity-70">
        <img 
          src="/lovable-uploads/790d9d42-8391-414f-93a4-146410fbd1f2.png" 
          alt="" 
          className="w-full h-full object-contain object-left-bottom"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-[40%] h-[40%] opacity-70">
        <div className="w-full h-full bg-gradient-to-br from-blue-400/10 to-purple-400/20 rounded-tl-[100px] transform rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-white mb-12 lg:mb-0">
          <h1 
            ref={headingRef}
            className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight slide-up leading-tight"
          >
            SAVE BIG<br />
            ON ONLINE<br />
            SHOPPING
          </h1>
          
          <p 
            ref={subheadingRef}
            className="text-green-400 text-2xl md:text-3xl mb-10 max-w-lg slide-up font-semibold"
            style={{ animationDelay: '0.2s' }}
          >
            NO CREDIT CARD REQUIRED
          </p>
          
          <button 
            ref={buttonRef}
            className="bg-gray-900 text-white font-medium py-4 px-8 rounded-full flex items-center hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg slide-up"
            style={{ animationDelay: '0.4s' }}
          >
            <span>Download App</span>
            <Download className="ml-2" size={20} />
          </button>
        </div>
        
        {/* Right Content - Phone */}
        <div 
          ref={phoneRef}
          className="w-full lg:w-1/2 flex justify-center fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          <div className="relative w-72 md:w-80 transform rotate-3">
            <div className="absolute inset-0 bg-black/20 rounded-[40px] blur-md transform scale-105"></div>
            <div className="relative bg-white rounded-[40px] overflow-hidden shadow-2xl border-8 border-black">
              <div className="relative w-full">
                <div className="absolute top-0 left-0 right-0 h-6 bg-black rounded-t-3xl flex items-center justify-center">
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
      
      {/* Decorative percentage symbol */}
      <div className="absolute top-20 right-20 hidden lg:block">
        <div className="relative w-32 h-32">
          <div className="absolute top-0 right-0 w-14 h-14 rounded-full border-[6px] border-orange-400/80 shadow-lg"></div>
          <div className="absolute bottom-0 left-0 w-10 h-20 border-r-[6px] border-orange-400/80 transform rotate-[30deg] origin-bottom-left shadow-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
