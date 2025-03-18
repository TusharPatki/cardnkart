import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  location: string;
  quote: string;
  image: string;  // Changed from avatar to image
}

const InfiniteScrollTestimonials = () => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  const testimonials: Testimonial[] = [
    {
      name: "Nupur",
      location: "Jamshedpur, Jharkhand",
      quote: "CardnCart has completely changed the way I shop online. I'm saving so much money without needing a credit card!",
      image: "lovable-uploads/Nupur.jpg"  // Changed from avatar to image
    },
    {
      name: "Urvashi Vaidya",
      location: "Bangalore, Karnataka",
      quote: "The exclusive deals are amazing. I've saved over $500 in the past three months alone. Highly recommended!",
      image: "lovable-uploads/urvashi.jpg"  // Changed from avatar to image
    },
    {
      name: "Jay Katyal",
      location: "Gurugram, Haryana",
      quote: "Simple to use, secure payments, and incredible customer service. CardnCart is now my go-to for all online shopping.",
      image: "lovable-uploads/jay katyal copy.jpg"  // Changed from avatar to image
    },
    {
      name: "Riya Prasad",
      location: "Indore, Madhya Pradesh",
      quote: "I was skeptical at first, but CardnCart delivered exactly what they promised. Their customer support is top-notch!",
      image: "lovable-uploads/riya parsad.jpg"  // Changed from avatar to image
    },
    {
      name: "Sarvaneet",
      location: "Nevada, USA",
      quote: "Getting exclusive card discounts without owning a credit card? Genius! CardnCart is a game-changer for online shoppers.",
      image: "lovable-uploads/sarvaneet.jpg"  // Changed from avatar to image
    }
  ];  

  // Double the testimonials array to create continuous scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

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

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || isHovered) return;

    // Initial position
    let scrollAmount = 0;
    const distance = 1; // Pixels to scroll per frame
    const scrollWidth = scrollContainer.scrollWidth;
    const containerWidth = scrollContainer.clientWidth;

    const scroll = () => {
      scrollContainer.scrollLeft = scrollAmount;
      scrollAmount += distance;
      
      // Reset when we've scrolled through half the items (to create infinite loop effect)
      if (scrollAmount >= scrollWidth / 2) {
        scrollAmount = 0;
      }
    };

    const interval = setInterval(scroll, 30); // Adjust speed here

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section id="testimonials" className="py-20 bg-cardnbg-blue text-white relative before:absolute before:inset-0 before:bg-white/5 before:backdrop-blur-lg overflow-hidden">
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
          className="slide-up w-full"
          style={{ animationDelay: '0.3s' }}
        >
          <div 
            ref={scrollContainerRef}
            className="overflow-x-hidden whitespace-nowrap py-4 w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="inline-flex gap-8">
              {duplicatedTestimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="inline-block w-72 md:w-80 whitespace-normal bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20 card-hover"
                >
                  <div className="flex items-center mb-4 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="fill-current text-cardnbg-yellow" size={16} />
                    ))}
                  </div>
                  <p className="text-white mb-6 italic h-24 overflow-hidden text-sm">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}  // Changed from avatar to image
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
        </div>
      </div>
    </section>
  );
};

export default InfiniteScrollTestimonials;