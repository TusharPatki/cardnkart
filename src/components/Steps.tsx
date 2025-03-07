import { useEffect, useRef } from 'react';
import { Smartphone, ShoppingCart, CreditCard, DollarSign, CheckCircle } from 'lucide-react';

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
      icon: <Smartphone size={24} />
    },
    {
      number: 2,
      title: "Add Items to Cart and proceed to the checkout page.",
      icon: <ShoppingCart size={24} />
    },
    {
      number: 3,
      title: "Select CardnCart as Your Payment Method at the bottom of the payment options.",
      icon: <CreditCard size={24} />
    },
    {
      number: 4,
      title: "Pay the Discounted Amount to CardnCart once a cardholder is found.",
      icon: <DollarSign size={24} />
    },
    {
      number: 5,
      title: "Enjoy Savings as the cardholder completes the payment, securing your order.",
      icon: <CheckCircle size={24} />
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#1E44FF] text-white relative overflow-hidden">
      <div className="absolute top-[-5%] right-[-2%] w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 z-10">
        <img src="public/lovable-uploads/Group 35561.png" alt="3D Arrow Element" className="w-full h-full object-contain" />
      </div>
      
      <div className="absolute bottom-0 left-[-8%] w-100 h-100 sm:w-80 sm:h-80 md:w-100 md:h-100 lg:w-120 lg:h-120 z-0">
        <img src="public/lovable-uploads/Group 35562 (1).png" alt="3D Curved Element" className="w-full h-full object-contain" />
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
            <div key={index} className="relative bg-gray-900 p-8 rounded-2xl h-64 flex flex-col justify-between">
              <div className="mb-auto">
                <p className="text-white text-sm md:text-base font-medium">
                  {step.title}
                </p>
              </div>
              
              <div className="flex items-end justify-between">
                <div className="text-green-400 font-bold text-xl">STEP</div>
                <div className="text-white opacity-90 font-display text-8xl leading-none font-bold">
                  {step.number}
                </div>
              </div>
            </div>
          ))}
          
          <div className="relative bg-gray-900 p-8 rounded-2xl h-64 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center">
                <img 
                  src="public/lovable-uploads/mask group.png" 
                  alt="CardnCart Mobile App Interface" 
                  className="h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-[-2%] right-[-3%] w-15 h-15">
        <img src="public/lovable-uploads/image (81).png" alt="3D Wave Element" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default Steps;