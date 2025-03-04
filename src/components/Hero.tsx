
import { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

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
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/4"></div>
      
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-white mb-12 lg:mb-0">
          <h1 
            ref={headingRef}
            className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight slide-up"
          >
            SAVE BIG<br />
            ON ONLINE<br />
            SHOPPING
          </h1>
          
          <p 
            ref={subheadingRef}
            className="text-blue-100 text-xl mb-8 max-w-lg slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            NO CREDIT CARD REQUIRED
          </p>
          
          <button 
            ref={buttonRef}
            className="bg-white text-cardnbg-blue font-medium py-3 px-8 rounded-full flex items-center hover:bg-cardnbg-yellow hover:text-cardnbg-darkBlue transition-all transform hover:scale-105 shadow-lg slide-up"
            style={{ animationDelay: '0.4s' }}
          >
            <span>Get Started</span>
            <ChevronRight className="ml-2" size={20} />
          </button>
        </div>
        
        {/* Right Content - Phone */}
        <div 
          ref={phoneRef}
          className="w-full lg:w-1/2 flex justify-center fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          <div className="relative w-64 md:w-72">
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-3xl transform scale-105 blur-lg"></div>
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl phone-shadow">
              <div className="relative">
                <img 
                  src="/lovable-uploads/f3eee27c-4ec4-44ad-92ee-2daa3c088a80.png" 
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
    </section>
  );
};

export default Hero;
