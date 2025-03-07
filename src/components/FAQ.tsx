import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // Start with the first item open
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
      question: "Can I use a different card than the one shown?",
      answer: "Note - Yes, you can. however, then we would request you to please check before placing the order that you're fine with amount you're receiving from yaper any further complaint won't be considered for adjustments."
    },
    {
      question: "Why is PAN required?",
      answer: "PAN is required for verification purposes and to comply with financial regulations. It helps us ensure secure transactions and prevents fraud."
    },
    {
      question: "How to use Yaper?",
      answer: "To use Yaper, simply sign up, link your bank account or card, and start making payments. You can also use Yaper to receive money, track expenses, and manage your finances."
    },
    {
      question: "How can I trust Yaper?",
      answer: "Yaper uses bank-level encryption to protect your data and transactions. We're also compliant with all financial regulations and have a dedicated customer support team to address any concerns."
    },
    {
      question: "Why is TDS deducted?",
      answer: "TDS (Tax Deducted at Source) is deducted as per government regulations. It's a form of collecting tax at the source of income, which is required by law for certain transactions."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-[#00084d] text-white">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className="text-center mb-16 slide-up"
        >
          <h2 className="font-bold text-3xl md:text-4xl">Frequently Asked Questions</h2>
        </div>
        
        <div 
          ref={faqsRef}
          className="max-w-3xl mx-auto slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 bg-white rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between p-5 text-left transition-colors bg-white text-black relative"
                aria-expanded={openItems.includes(index)}
              >
                <span className="font-bold text-black">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full bg-[#00084d] flex items-center justify-center`}>
                  <ChevronDown 
                    className={`transition-transform duration-300 ${
                      openItems.includes(index) ? 'transform rotate-180' : ''
                    }`} 
                    size={18}
                    color="white"
                  />
                </div>
              </button>
              <div 
                className={`bg-white text-gray-600 overflow-hidden transition-all duration-300 ${
                  openItems.includes(index) ? 'max-h-96 px-5 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;