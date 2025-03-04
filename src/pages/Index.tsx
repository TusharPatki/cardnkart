
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Steps from '@/components/Steps';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import AppDownload from '@/components/AppDownload';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with fade-in or slide-up classes
    document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            window.scrollTo({
              top: element.getBoundingClientRect().top + window.scrollY - 100,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden pt-24">
      <Navbar />
      <Hero />
      <Benefits />
      <Steps />
      <Testimonials />
      <FAQ />
      <AppDownload />
      <Footer />
    </div>
  );
};

export default Index;
