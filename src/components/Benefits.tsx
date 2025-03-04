
import { useEffect, useRef } from 'react';
import { CreditCard, ShoppingBag, Shield } from 'lucide-react';

const Benefits = () => {
  const titleRef = useRef<HTMLDivElement>(null);
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

    if (titleRef.current) observer.observe(titleRef.current);
    if (cardsRef.current) observer.observe(cardsRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (cardsRef.current) observer.unobserve(cardsRef.current);
    };
  }, []);

  return (
    <section id="benefits" className="py-20 bg-cardnbg-blue text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-10 transform translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-10 transform -translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className="text-center mb-16 slide-up"
        >
          <h2 className="text-blue-100 font-medium text-lg mb-3">Our Benefits</h2>
          <h3 className="font-display font-bold text-3xl md:text-4xl">Shop smarter, not harder</h3>
        </div>
        
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          {/* Benefit 1 */}
          <div className="bg-blue-700 p-6 rounded-xl glass-effect card-hover">
            <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <CreditCard className="text-white" size={24} />
            </div>
            <h4 className="font-display font-semibold text-xl mb-3">Exclusive Deals</h4>
            <p className="text-blue-100 text-sm">Get access to thousands of exclusive deals and discounts across hundreds of online stores.</p>
          </div>
          
          {/* Benefit 2 */}
          <div className="bg-blue-700 p-6 rounded-xl glass-effect card-hover">
            <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <ShoppingBag className="text-white" size={24} />
            </div>
            <h4 className="font-display font-semibold text-xl mb-3">Shop Without Credit</h4>
            <p className="text-blue-100 text-sm">No credit card required - use alternative payment methods while still enjoying premium benefits.</p>
          </div>
          
          {/* Benefit 3 */}
          <div className="bg-blue-700 p-6 rounded-xl glass-effect card-hover">
            <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Shield className="text-white" size={24} />
            </div>
            <h4 className="font-display font-semibold text-xl mb-3">Secure Shopping</h4>
            <p className="text-blue-100 text-sm">Shop with confidence knowing your personal and payment information is always protected.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
