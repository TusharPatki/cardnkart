import { useEffect, useRef } from 'react';
import { Download } from 'lucide-react';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);

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
    if (imageRef.current) observer.observe(imageRef.current);
    if (glassRef.current) observer.observe(glassRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (subheadingRef.current) observer.unobserve(subheadingRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (glassRef.current) observer.unobserve(glassRef.current);
    };
  }, []);

  return (
    <section className="bg-[#2549E8] overflow-hidden min-h-screen flex flex-col items-center justify-center py-10 px-4 relative pt-24 md:pt-32">
      {/* Glass Effect Container - Positioned to start from the image and extend to the bottom */}
      <div 
        ref={glassRef}
        className="absolute bottom-0 left-0 right-0 top-[60%] md:top-[45%] z-0 slide-up"
        style={{ animationDelay: '0.5s' }}
      >
        <div className="w-full h-full backdrop-blur-md bg-white/10 rounded-t-3xl shadow-lg border border-white/20">
          <div className="text-white text-center pt-8">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Stay Updated</h3>
            <p className="text-white/80">Be the first to know when we launch!</p>
          </div>
        </div>
      </div>
      
      {/* Design Elements - All with higher z-index to stay above glass */}
      <div className="absolute left-0 bottom-[30%] w-[200px] md:w-[400px] z-10 pointer-events-none">
        <img 
          src="/lovable-uploads/549a10ef-11a6-4047-953c-0549fa1e8a4a.png" 
          alt="Blue Fluid Shape" 
          className="w-full h-auto animate-float"
        />
      </div>
      
      <div className="absolute right-[-10%] md:right-0 bottom-[-5%] md:bottom-0 w-[700px] md:w-[900px] z-10 pointer-events-none transform translate-x-20 translate-y-20 md:translate-x-0 md:translate-y-0 scale-25 md:scale-100 transition-all duration-300">
        <img
          src="/lovable-uploads/928aaac5-820f-45be-a148-704b093b6604.png"
          alt="Pink Blue Shape"
          className="w-full h-auto animate-float"
          style={{ animationDelay: '0.5s' }}
        />
      </div>
      
      <div className="absolute top-20 right-10 w-[100px] md:w-[150px] z-10 pointer-events-none">
        <img 
          src="/lovable-uploads/a89b1dc2-0888-4634-a227-5380670b72cf.png" 
          alt="Percentage Symbol" 
          className="w-full h-auto animate-float"
          style={{ animationDelay: '1s' }}
        />
      </div>
      
      <div className="container mx-auto flex flex-col items-center text-center z-20 max-w-10xl mt-20 md:mt-16">
        {/* Main Heading */}
        <h1 
          ref={headingRef}
          className="font-display font-extrabold text-2xl md:text-10xl lg:text-8xl mb-12 text-white slide-up tracking-tight leading-tight"
        >
          SAVE BIG<br />
          ON ONLINE<br />
          SHOPPING
        </h1>
        
        {/* Subheading */}
        <p 
          ref={subheadingRef}
          className="text-[#8EFF8B] text-xl md:text-3xl lg:text-4xl mb-8 slide-up font-display font-semibold"
          style={{ animationDelay: '0.2s' }}
        >
          NO CREDIT CARD REQUIRED
        </p>
        
        {/* Download Now Button */}
        <div
          ref={buttonRef as React.RefObject<HTMLDivElement>}
          className="slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          <a 
            href="https://play.google.com/store/apps/details?id=com.cardncart.android&hl=en-IN" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-black text-white font-medium py-3 px-6 rounded-full inline-flex items-center hover:bg-gray-900 transition-all transform hover:scale-105 shadow-lg"
          >
            <Download className="mr-2 h-5 w-5" />
            <span className="text-[#8EFF8B] font-semibold">Download now</span>
          </a>
        </div>
        
        {/* App Screenshot Image */}
        <div 
          className="w-full max-w-lg mx-auto slide-up relative z-10 mt-12"
          style={{ animationDelay: '0.6s' }}
        >
          <img
            ref={imageRef}
            src="3399 2.svg"
            alt="CardnCart App Screenshot"
            className="w-full h-auto object-contain rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;