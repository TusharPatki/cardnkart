
import { useEffect, useRef } from 'react';
import { CreditCard, DollarSign, Receipt } from 'lucide-react';
import { cn } from '@/lib/utils';

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
      { threshold: 0.1 }
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
    <div className="bg-[#2549E8] py-16 relative before:absolute before:inset-0 before:bg-white/5 before:backdrop-blur-lg">
      <section 
        id="benefits" 
        ref={sectionRef}
        className="py-16 bg-transparent text-white relative overflow-hidden rounded-3xl max-w-6xl mx-auto my-0 px-6 md:px-10 z-10"
      >
        {/* Border effect */}
        <div className="absolute inset-0 border-2 border-[#8EFF8B] rounded-3xl opacity-50"></div>
        
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
          <div className="bg-blue-600/20 backdrop-blur-md p-6 rounded-xl shadow-lg">
            <div className="bg-[#8EFF8B]/20 w-24 h-24 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <CreditCard className="text-[#8EFF8B]" size={48} />
            </div>
            <h4 className="font-display font-semibold text-xl text-[#8EFF8B] mb-3 text-center">
              Get Instant Access
            </h4>
            <p className="text-center text-blue-100">
              Access any credit card on demand—available 24/7 for all your shopping needs.
            </p>
          </div>
          
          {/* Benefit 2 */}
          <div className="bg-blue-600/20 backdrop-blur-md p-6 rounded-xl shadow-lg">
            <div className="bg-[#8EFF8B]/20 w-24 h-24 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <DollarSign className="text-[#8EFF8B]" size={48} />
            </div>
            <h4 className="font-display font-semibold text-xl text-[#8EFF8B] mb-3 text-center">
              Enjoy Exclusive Savings
            </h4>
            <p className="text-center text-blue-100">
              Redeem top credit card discounts on major e-commerce platforms.
            </p>
          </div>
          
          {/* Benefit 3 */}
          <div className="bg-blue-600/20 backdrop-blur-md p-6 rounded-xl shadow-lg">
            <div className="bg-[#8EFF8B]/20 w-24 h-24 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Receipt className="text-[#8EFF8B]" size={48} />
            </div>
            <h4 className="font-display font-semibold text-xl text-[#8EFF8B] mb-3 text-center">
              Shop Without Limits
            </h4>
            <p className="text-center text-blue-100">
              Make real-time purchases seamlessly with CardInCart.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;
