
import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

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
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (testimonialsRef.current) observer.unobserve(testimonialsRef.current);
    };
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      quote: "CardnCart has completely changed the way I shop online. I'm saving so much money without needing a credit card!",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Michael Chen",
      location: "Toronto, Canada",
      quote: "The exclusive deals are amazing. I've saved over $500 in the past three months alone. Highly recommended!",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Emma Williams",
      location: "London, UK",
      quote: "Simple to use, secure payments, and incredible customer service. CardnCart is now my go-to for all online shopping.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-cardnbg-blue text-white relative before:absolute before:inset-0 before:bg-white/5 before:backdrop-blur-lg">
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={titleRef}
          className="text-center mb-16 slide-up"
        >
          <h2 className="text-blue-100 font-medium text-lg mb-3">Testimonials</h2>
          <h3 className="font-display font-bold text-3xl md:text-4xl">Join Thousands of Satisfied Customers</h3>
        </div>
        
        <div 
          ref={testimonialsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20 card-hover"
            >
              <div className="flex items-center mb-4 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="fill-current text-cardnbg-yellow" size={16} />
                ))}
              </div>
              <p className="text-white mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white/30"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-blue-100">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
