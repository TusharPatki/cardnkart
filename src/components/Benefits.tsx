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
    <div className="bg-[#1E44FF] py-8 px-8">
      {/* Main section containing all benefits - now with visible border */}
      <section 
        id="benefits" 
        ref={sectionRef}
        className="py-12 text-white relative overflow-hidden max-w-6xl mx-auto px-6 md:px-10 z-10 rounded-xl border-2 border-green-400 aspect-square md:aspect-auto"
      >
        <div ref={headerRef} className="slide-up">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">Dear Shoppers</h2>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl opacity-90">
            No credit card? No problem! Get the best e-commerce deals effortlessly.
          </p>
        </div>
        
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          {/* Benefit 1 */}
          <div className="bg-blue-600/50 p-4 rounded-xl">
            {/* Glass effect applied to image container only */}
            <div className="bg-blue-400/10 backdrop-blur-sm w-32 h-32 md:w-36 md:h-36 rounded-xl flex items-center justify-center mb-6 mx-auto border border-green-400/30">
              <img 
                src="lovable-uploads/asset-1_360.png" 
                alt="Instant Access" 
                className="w-16 h-16 object-contain"
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
          <div className="bg-blue-600/50 p-4 rounded-xl">
            {/* Glass effect applied to image container only */}
            <div className="bg-blue-400/10 backdrop-blur-sm w-32 h-32 md:w-36 md:h-36 rounded-xl flex items-center justify-center mb-6 mx-auto border border-green-400/30">
              <img 
                src="lovable-uploads/asset-2.png" 
                alt="Exclusive Savings" 
                className="w-16 h-16 object-contain"
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
          <div className="bg-blue-600/50 p-4 rounded-xl">
            {/* Glass effect applied to image container only */}
            <div className="bg-blue-400/10 backdrop-blur-sm w-32 h-32 md:w-36 md:h-36 rounded-xl flex items-center justify-center mb-6 mx-auto border border-green-400/30">
              <img 
                src="lovable-uploads/asset-3.png" 
                alt="Shop Without Limits" 
                className="w-16 h-16 object-contain"
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