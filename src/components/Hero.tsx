import { useEffect, useRef } from 'react';
import { Download } from 'lucide-react';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

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

    if (headingRef.current) observer.observe(headingRef.current);
    if (subheadingRef.current) observer.observe(subheadingRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (subheadingRef.current) observer.unobserve(subheadingRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section className="bg-[#2549E8] overflow-hidden min-h-screen flex flex-col items-center justify-center py-10 px-4 relative pt-24 md:pt-32">
      {/* Design Elements */}
      <div className="absolute left-0 bottom-0 w-[300px] md:w-[400px] z-0 pointer-events-none">
        <img 
          src="/lovable-uploads/549a10ef-11a6-4047-953c-0549fa1e8a4a.png" 
          alt="Blue Fluid Shape" 
          className="w-full h-auto animate-float"
        />
      </div>
      
      <div className="absolute right-0 bottom-0 w-[300px] md:w-[400px] z-0 pointer-events-none">
        <img 
          src="/lovable-uploads/928aaac5-820f-45be-a148-704b093b6604.png" 
          alt="Pink Blue Shape" 
          className="w-full h-auto animate-float"
          style={{ animationDelay: '1s' }}
        />
      </div>
      
      <div className="absolute top-20 right-10 w-[100px] md:w-[150px] z-0 pointer-events-none">
        <img 
          src="/lovable-uploads/a89b1dc2-0888-4634-a227-5380670b72cf.png" 
          alt="Percentage Symbol" 
          className="w-full h-auto animate-float"
          style={{ animationDelay: '1.5s' }}
        />
      </div>
      
      <div className="container mx-auto flex flex-col items-center text-center z-10 max-w-5xl mt-16 md:mt-8">
        {/* Main Heading */}
        <h1 
          ref={headingRef}
          className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl mb-6 text-white slide-up tracking-tight leading-tight"
        >
          SAVE BIG<br />
          ON ONLINE<br />
          SHOPPING
        </h1>
        
        {/* Subheading */}
        <p 
          ref={subheadingRef}
          className="text-[#8EFF8B] text-xl md:text-3xl lg:text-4xl mb-8 slide-up font-display font-semibold"
          style={{ animationDelay: '0.2s' }}
        >
          NO CREDIT CARD REQUIRED
        </p>
        
        {/* Coming Soon Button (replacing Download Button) */}
        <div 
          ref={buttonRef}
          className="bg-black text-white font-medium py-3 px-8 rounded-full inline-block hover:bg-gray-900 transition-all transform hover:scale-105 shadow-lg slide-up mb-10"
          style={{ animationDelay: '0.4s' }}
        >
          <span className="text-cardnbg-yellow font-semibold">Coming soon</span>
        </div>
        
        {/* App Screenshot Image */}
        <div 
          className="w-full max-w-lg mx-auto slide-up relative z-10"
          style={{ animationDelay: '0.6s' }}
        >
          <img
            ref={imageRef}
            src="https://s3-alpha-sig.figma.com/img/036a/2bff/c0aa9c975bcc831d45ba12d4d33c31c4?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lWgEyWKBqGrKOBObFtYqvx5ddpXfqzdTUtWPS8DsnZX2oDPj96G2cAlhZ~p0aaBxCYrsbvJU1qLH4uKHyCvWG0991VqTROW3k89PCLDcnyhEA3hCnauy-e9ztM71hFgiJHT6Lr5M3ctBMEKmmFnfc6a9cFDPSy648ePvmtQ8Vjf795qPAKCLNRIfp3KKM9BErYjGASy35fZA8FC6AP8d~HXKye9pFpIPvbfx1sA7s7vN61Eh6d4lc-RsNEXPn3oFc3w0ENKeCVqVGfVe6cHYLrjWKqJZFYrU53lyBIVllvGkwgdc8wBou24Zj2P8~G0I4MgOvKMaHbZijCA2wOkBSA__"
            alt="CardnCart App Screenshot"
            className="w-full h-auto object-contain rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
