
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
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#" 
                className="bg-black hover:bg-gray-900 transition-all px-5 py-3 rounded-lg flex items-center"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                  <path d="M17.0598 0H6.91977C6.36835 0 5.91977 0.448 5.91977 1V23C5.91977 23.552 6.36835 24 6.91977 24H17.0598C17.6113 24 18.0598 23.552 18.0598 23V1C18.0598 0.448 17.6113 0 17.0598 0Z" fill="white"/>
                  <path d="M14.0195 19.6797C14.0195 20.3721 13.4579 20.9337 12.7655 20.9337C12.0731 20.9337 11.5115 20.3721 11.5115 19.6797C11.5115 18.9873 12.0731 18.4257 12.7655 18.4257C13.4579 18.4257 14.0195 18.9873 14.0195 19.6797Z" fill="black"/>
                  <path d="M12.7655 1.6807H11.5115C11.2701 1.6807 11.0748 1.8761 11.0748 2.1175C11.0748 2.3589 11.2701 2.5542 11.5115 2.5542H12.7655C13.0069 2.5542 13.2022 2.3589 13.2022 2.1175C13.2022 1.8761 13.0069 1.6807 12.7655 1.6807Z" fill="black"/>
                </svg>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
              
              <a 
                href="#" 
                className="bg-black hover:bg-gray-900 transition-all px-5 py-3 rounded-lg flex items-center"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                  <path d="M18.7225 12.0343C18.7032 9.37453 20.89 7.9302 20.9963 7.86573C19.7055 5.92305 17.7117 5.65305 16.9866 5.63062C15.2757 5.45946 13.6251 6.67323 12.7593 6.67323C11.8748 6.67323 10.5251 5.65005 9.04991 5.68148C7.14517 5.71269 5.39572 6.78269 4.42445 8.47806C2.41333 11.9326 3.91278 17.014 5.85163 19.634C6.8254 20.9202 7.96167 22.3711 9.45238 22.3174C10.9023 22.2581 11.4529 21.3758 13.1984 21.3758C14.9229 21.3758 15.4363 22.3174 16.9487 22.2782C18.5064 22.2559 19.4892 20.9682 20.4331 19.6676C21.5483 18.1905 22.0012 16.7417 22.0223 16.6724C21.9805 16.6557 18.7431 15.3667 18.7225 12.0343Z" fill="white"/>
                  <path d="M15.5789 3.53418C16.3714 2.56176 16.9047 1.24055 16.7359 0C15.5818 0.0493359 14.1663 0.774219 13.3468 1.72477C12.6272 2.57141 11.9912 3.9318 12.1792 5.14613C13.4815 5.24031 14.7587 4.48805 15.5789 3.53418Z" fill="white"/>
                </svg>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
            </div>
          </div>
          
          <div 
            ref={phoneRef}
            className="w-full md:w-1/3 flex justify-center fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="relative w-56">
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-blue-400/5 rounded-3xl transform scale-105 blur-lg"></div>
              <div className="bg-cardnbg-darkBlue rounded-3xl overflow-hidden shadow-2xl">
                <div className="flex justify-center py-8">
                  <div className="bg-cardnbg-darkBlue p-3 rounded-md">
                    <span className="text-white font-bold text-2xl">C</span>
                  </div>
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
