
import { useEffect, useRef } from 'react';
import { Download } from 'lucide-react';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

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

    if (headingRef.current) observer.observe(headingRef.current);
    if (subheadingRef.current) observer.observe(subheadingRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);
    if (phoneRef.current) observer.observe(phoneRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (subheadingRef.current) observer.unobserve(subheadingRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
      if (phoneRef.current) observer.unobserve(phoneRef.current);
    };
  }, []);

  return (
    <section className="bg-[#2549E8] overflow-hidden min-h-screen flex flex-col items-center justify-between py-20 px-4 relative">
      {/* Background Design Elements removed */}
      
      <div className="container mx-auto flex flex-col items-center text-center z-10 max-w-5xl pt-10 md:pt-16">
        {/* Main Heading */}
        <h1 
          ref={headingRef}
          className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl mb-6 text-white slide-up tracking-tight leading-tight"
        >
          SAVE BIG<br />
          ON ONLINE<br />
          SHOPPING
        </h1>
        
        {/* Subheading */}
        <p 
          ref={subheadingRef}
          className="text-[#8EFF8B] text-xl md:text-3xl lg:text-4xl mb-12 slide-up font-display font-semibold"
          style={{ animationDelay: '0.2s' }}
        >
          NO CREDIT CARD REQUIRED
        </p>
        
        {/* Download Button */}
        <button 
          ref={buttonRef}
          className="bg-black text-white font-medium py-3 px-8 rounded-full flex items-center hover:bg-gray-900 transition-all transform hover:scale-105 shadow-lg slide-up mb-12"
          style={{ animationDelay: '0.4s' }}
        >
          <span>Download App</span>
          <Download className="ml-2" size={20} />
        </button>
        
        {/* Phone Mockup */}
        <div 
          ref={phoneRef}
          className="w-full max-w-xs md:max-w-sm mt-6 fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-black/20 rounded-[40px] blur-xl transform scale-105"></div>
            <div className="relative bg-white rounded-[40px] overflow-hidden shadow-2xl border-8 border-black">
              <div className="relative w-full">
                <div className="absolute top-0 left-0 right-0 h-6 bg-black rounded-t-3xl flex items-center justify-center">
                  <div className="w-20 h-4 bg-black rounded-b-xl"></div>
                </div>
                <img 
                  src="/lovable-uploads/16a5816b-7f69-4018-a5dc-aeb191ba6639.png" 
                  alt="App Screenshot" 
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
