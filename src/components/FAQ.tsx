
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const titleRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);

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
    if (faqsRef.current) observer.observe(faqsRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (faqsRef.current) observer.unobserve(faqsRef.current);
    };
  }, []);

  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((item) => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  const faqs: FAQItem[] = [
    {
      question: "How do I get started with CardnCart?",
      answer: "Getting started is easy! Simply download our app from the App Store or Google Play, create an account, and start browsing exclusive deals. No credit card required to sign up."
    },
    {
      question: "Are there any membership fees?",
      answer: "CardnCart offers both free and premium membership tiers. The free tier gives you access to many great deals, while our premium membership unlocks additional benefits and higher discount percentages for a small monthly fee."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept various payment methods including debit cards, PayPal, Apple Pay, Google Pay, and many local payment options depending on your country. You don't need a traditional credit card to shop with CardnCart."
    },
    {
      question: "How do the discounts work?",
      answer: "Our discounts are applied automatically at checkout when you shop through our app or browser extension. The discount amounts vary depending on the retailer and your membership tier."
    },
    {
      question: "Is my personal information secure?",
      answer: "Absolutely! We use bank-level encryption and security protocols to ensure your personal and payment information remains secure. We never store your full payment details on our servers."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-cardnbg-darkBlue text-white">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className="text-center mb-16 slide-up"
        >
          <h2 className="text-blue-200 font-medium text-lg mb-3">Learn More</h2>
          <h3 className="font-display font-bold text-3xl md:text-4xl">Frequently Asked Questions</h3>
        </div>
        
        <div 
          ref={faqsRef}
          className="max-w-3xl mx-auto slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 bg-white/5 rounded-lg overflow-hidden border border-blue-900/30"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-blue-900/20"
              >
                <span className="font-semibold text-white">{faq.question}</span>
                <ChevronDown 
                  className={`transition-transform duration-300 ${openItems.includes(index) ? 'transform rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openItems.includes(index) ? 'max-h-96 px-5 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-blue-200">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
