
import { useEffect, useRef } from 'react';

const AppDownload = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (phoneRef.current) observer.observe(phoneRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (phoneRef.current) observer.unobserve(phoneRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-cardnbg-blue text-white relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/4"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
          <div 
            ref={contentRef}
            className="w-full md:w-1/2 mb-12 md:mb-0 slide-up"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">Download App</h2>
            <p className="text-blue-100 mb-8 max-w-md">
              Get the CardnCart app on your mobile device for the best shopping experience. Access exclusive deals, track your savings, and shop with ease, anytime, anywhere.
            </p>
            
            <div className="inline-block py-3 px-6 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
              <p className="text-xl font-semibold text-cardnbg-yellow">Coming soon</p>
            </div>
          </div>
          
          <div 
            ref={phoneRef}
            className="w-full md:w-1/3 flex justify-center fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="relative w-56">
              <img 
                src="/lovable-uploads/6e354986-6d42-4a31-b08e-a03dabd69774.png" 
                alt="CardnCart App" 
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
