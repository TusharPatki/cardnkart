import { useEffect, useRef } from 'react';
import { Download } from 'lucide-react';

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
      className="py-20 bg-white relative overflow-visible"
    >
      <div className="container mx-auto px-4 relative">
        {/* Inner blue container - increased size */}
        <div className="bg-blue-700 rounded-3xl shadow-xl overflow-visible relative py-4 px-6 md:px-16 min-h-[400px]">
          {/* 3D ring element positioned to extend outside the left side of blue container */}
          <div className="absolute top-[-5%] -left-4 md:-left-8 z-10">
            <img 
              src="lovable-uploads/3400.png" 
              alt="3D Ring" 
              className="w-56 h-56 md:w-72 md:h-72 object-contain"
            />
          </div>


          <div className="py-8 px-8 md:px-16 mt-32 md:mt-24">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Left section (kept for spacing) */}
              <div className="md:flex-1 mb-8 md:mb-0">
                {/* Space reserved for the 3D element that's now positioned absolutely */}
              </div>
              
              {/* Center section with text */}
              <div 
                ref={contentRef}
                className="md:flex-1 text-white relative"
              >
                <div className="transform -translate-x-1/3">
                  <h2 className="font-sans font-bold text-2xl md:text-8xl mb-6">Download Now</h2>
                  
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.cardncart.android&hl=en-IN" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center py-3 px-6 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105"
                  >
                    <Download className="mr-2 h-5 w-5 text-yellow-300" />
                    <p className="text-xl font-semibold text-yellow-300">Download Now</p>
                  </a>
                </div>
              </div>
              
              {/* Right section with phone - positioned to extend outside the container */}
              <div 
                ref={phoneRef}
                className="md:flex-1 flex justify-center bottom-[10%] md:justify-end mt-8 md:mt-0"
              >
                <div className="relative translate-y-[1%] w-56 md:w-72">
                  <img 
                    src="lovable-uploads/6e354986-6d42-4a31-b08e-a03dabd69774.png" 
                    alt="CardnCart App" 
                    className="w-full h-auto rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;