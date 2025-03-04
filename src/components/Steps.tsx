
import { useEffect, useRef } from 'react';
import { Smartphone, Download, CreditCard, ShoppingBag, CheckCircle } from 'lucide-react';

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
      title: "Download the App",
      description: "Get our free app from the App Store or Google Play",
      icon: <Download className="text-cardnbg-yellow" size={24} />
    },
    {
      number: 2,
      title: "Create an Account",
      description: "Sign up with your email and basic information",
      icon: <Smartphone className="text-cardnbg-yellow" size={24} />
    },
    {
      number: 3,
      title: "Set Preferences",
      description: "Tell us what you like to shop for",
      icon: <CheckCircle className="text-cardnbg-yellow" size={24} />
    },
    {
      number: 4,
      title: "Add Payment Method",
      description: "Connect your preferred payment option",
      icon: <CreditCard className="text-cardnbg-yellow" size={24} />
    },
    {
      number: 5,
      title: "Start Shopping",
      description: "Browse deals and save big on every purchase",
      icon: <ShoppingBag className="text-cardnbg-yellow" size={24} />
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-cardnbg-darkBlue text-white">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className="text-center mb-16 slide-up"
        >
          <h2 className="text-blue-200 font-medium text-lg mb-3">How To Order</h2>
          <h3 className="font-display font-bold text-3xl md:text-4xl text-white">A Product via CardnCart</h3>
        </div>
        
        <div 
          ref={stepsRef}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          {steps.map((step, index) => (
            <div key={index} className="relative glass-effect bg-blue-900/20 p-6 rounded-xl border border-blue-800/50 card-hover">
              <div className="absolute -top-4 -left-4 bg-cardnbg-darkBlue border border-blue-800/50 rounded-full w-10 h-10 flex items-center justify-center">
                <span className="text-cardnbg-yellow font-display font-bold">{step.number}</span>
              </div>
              <div className="mb-4 pt-2">{step.icon}</div>
              <h4 className="font-display font-semibold text-lg mb-2 text-white">{step.title}</h4>
              <p className="text-blue-200 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
