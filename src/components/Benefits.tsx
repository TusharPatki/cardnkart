import { useEffect, useRef } from 'react';

const Benefits = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (headerRef.current) observer.observe(headerRef.current);
    if (cardsRef.current) observer.observe(cardsRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (headerRef.current) observer.unobserve(headerRef.current);
      if (cardsRef.current) observer.unobserve(cardsRef.current);
    };
  }, []);

  return (
    <div className="bg-[#1E44FF] py-16 relative">
      {/* Glass container positioned behind the main section - full size */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-8xl w-full h-full rounded-3xl border-2 border-green-400/30 bg-blue-400/10 backdrop-blur-sm scale-105 z-0"></div>
      </div>
      
      {/* Main section containing all benefits */}
      <section 
        id="benefits" 
        ref={sectionRef}
        className="py-16 text-white relative overflow-hidden max-w-6xl mx-auto my-0 px-6 md:px-10 z-10 rounded-3xl border-2 border-green-400"
      >
        <div ref={headerRef} className="slide-up">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">Dear Shoppers</h2>
          <p className="text-xl md:text-2xl mb-16 max-w-2xl opacity-90">
            No credit card? No problem! Get the best e-commerce deals effortlessly.
          </p>
        </div>
        
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          {/* Benefit 1 */}
          <div className="bg-blue-500/50 p-6 rounded-xl">
            <div className="bg-green-400/20 w-40 h-40 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <img 
                src="lovable-uploads/asset-1_360.png" 
                alt="Instant Access" 
                className="w-20 h-20 object-contain"
              />
            </div>
            <h4 className="font-display font-semibold text-xl text-green-400 mb-3 text-center">
              Get Instant Access
            </h4>
            <p className="text-center text-blue-100">
              Access any credit card on demand—available 24/7 for all your shopping needs.
            </p>
          </div>
          
          {/* Benefit 2 */}
          <div className="bg-blue-500/50 p-6 rounded-xl">
            <div className="bg-green-400/20 w-40 h-40 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <img 
                src="lovable-uploads/asset-2.png" 
                alt="Exclusive Savings" 
                className="w-20 h-20 object-contain"
              />
            </div>
            <h4 className="font-display font-semibold text-xl text-green-400 mb-3 text-center">
              Enjoy Exclusive Savings
            </h4>
            <p className="text-center text-blue-100">
              Redeem top credit card discounts on major e-commerce platforms.
            </p>
          </div>
          
          {/* Benefit 3 */}
          <div className="bg-blue-500/50 p-6 rounded-xl">
            <div className="bg-green-400/20 w-40 h-40 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <img 
                src="lovable-uploads/asset-3.png" 
                alt="Shop Without Limits" 
                className="w-20 h-20 object-contain"
              />
            </div>
            <h4 className="font-display font-semibold text-xl text-green-400 mb-3 text-center">
              Shop Without Limits
            </h4>
            <p className="text-center text-blue-100">
              Make real-time purchases seamlessly with CardnCart.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;