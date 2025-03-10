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
      question: "Can I buy any product from Cardncart?",
      answer: "**Note:** Yes, you can purchase any product available on Flipkart through our platform. We are continuously working on integrating more stores, and they will be available soon."
    },
    {
      question: "Why is advance payment required?",
      answer: "Advance payments do not go directly into our bank account. Instead, they are held in an escrow bank account, ensuring that funds are securely stored under the condition that the payment is released only after the product has been successfully received. This process safeguards both parties, providing assurance to the cardholder while maintaining financial security by keeping balances in advance."
    },
    {
      question: "How to use Cardncart?",
      answer: "To use our service, simply sign up, browse for the desired product, and click [Buy Now.] We will offer you the best price, and once you are satisfied, you can make the payment via our QR code. Our system will then place the order on your behalf seamlessly."
    },
    {
      question: "How can I trust Cardncart?",
      answer: "Cardncart uses escrow bank account to protect your data and transactions. We're also compliant with all financial regulations and have a dedicated customer support team to address any concerns."
    },
    {
      question: "How much commission does Cardncart charge?",
      answer: "The fee varies depending on the product but generally ranges between 2-3% of the total product value. In some cases, it may be even lower, depending on the product category or specific credit card requirements."
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