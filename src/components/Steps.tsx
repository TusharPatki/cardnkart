
import { useEffect, useRef } from 'react';

const Steps = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

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
    if (stepsRef.current) observer.observe(stepsRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (stepsRef.current) observer.unobserve(stepsRef.current);
    };
  }, []);

  const steps = [
    {
      number: 1,
      title: "Open the E-commerce Platform on CardnCart.",
    },
    {
      number: 2,
      title: "Add Items to Cart and proceed to the checkout page.",
    },
    {
      number: 3,
      title: "Select CardnCart as Your Payment Method at the bottom of the payment options.",
    },
    {
      number: 4,
      title: "Pay the Discounted Amount to CardnCart once a cardholder is found.",
    },
    {
      number: 5,
      title: "Enjoy Savings as the cardholder completes the payment, securing your order.",
    },
    {
      number: 6,
      title: "Track Your Order and Receive Updates directly in the CardnCart app.",
      image: "/lovable-uploads/4c28fa0b-e7a6-416e-aad5-9e84f3e78861.png"
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-cardnbg-blue text-white relative overflow-hidden">
      {/* Decorative 3D elements */}
      <div className="absolute top-10 right-10 opacity-70 w-[200px] md:w-[250px] lg:w-[300px]">
        <img 
          src="/lovable-uploads/20ba3265-4534-4c49-a090-26c807427f8f.png" 
          alt="3D Arrow" 
          className="w-full h-auto"
        />
      </div>
      
      <div className="absolute bottom-0 left-0 w-[200px] md:w-[300px] lg:w-[400px] opacity-90">
        <img 
          src="/lovable-uploads/145a9f63-8061-423b-84ff-c5b2396729bf.png" 
          alt="3D Curved Shape" 
          className="w-full h-auto"
        />
      </div>
      
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className="text-center mb-16 slide-up"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white">
            How to Order a Product via CardnCart
          </h2>
        </div>
        
        <div 
          ref={stepsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          {steps.map((step, index) => (
            <div key={index} className="relative bg-[#0A1232] p-8 rounded-2xl h-[250px] flex flex-col justify-between">
              {step.image && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <img 
                    src={step.image} 
                    alt={`Step ${step.number} visual`} 
                    className="w-full h-full object-cover rounded-2xl opacity-90"
                  />
                </div>
              )}
              
              <div className={`mb-auto ${step.image ? 'z-10 relative' : ''}`}>
                <p className={`${step.image ? 'text-transparent' : 'text-white'} text-sm md:text-base font-medium`}>
                  {step.title}
                </p>
              </div>
              
              <div className={`flex items-end justify-between ${step.image ? 'z-10 relative' : ''}`}>
                <div className={`${step.image ? 'text-transparent' : 'text-[#8EFF8B]'} font-bold text-xl`}>STEP</div>
                <div className={`${step.image ? 'text-white opacity-30' : 'text-white opacity-90'} font-display text-[120px] leading-none font-bold`}>
                  {step.number}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
